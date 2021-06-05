import WantedService from "../services/Wanted";
import api from "../tools/common";

function addWanted(req, res, next) {
  const wanted = { ...req.body, UserId: req.UserId };
  if (req.body.name == "" || req.body.CategoryId == null) {
    api.error(res, "Input invalid", 400);
    return;
  }

  WantedService.addWanted(wanted)
    .then(wanted => api.ok(res, wanted))
    .catch(e => api.error(res, e.message, 400));
}

function preregister(req, res, next) {
  const wanted = { ...req.body, UserId: req.params.UserId };
  if (req.body.name == "" || req.body.CategoryId == null) {
    api.ok(res, {});
    return;
  }

  WantedService.addWanted(wanted)
    .then(wanted => api.ok(res, wanted))
    .catch(e => api.error(res, e.message, 400));
}

function updateWanted(req, res, next) {
  let wanted = {
    UserId: req.UserId,
    CategoryId: null,
    ConditionId: null,
    notification: "NO"
  };

  wanted = { ...wanted, ...req.body };
  WantedService.updateWanted(req.params.wantedId, wanted)
    .then(wanted => {
      if (wanted) {
        api.ok(res, wanted);
      } else {
        api.error(res, "Wanted not found", 404);
      }
    })
    .catch(e => api.error(res, e.message, 500));
}

function getDetail(req, res, next) {
  WantedService.getDetail(req.params.wantedId)
    .then(wanted => {
      if (wanted) {
        api.ok(res, wanted);
      } else {
        api.error(res, "Wanted not found", 404);
      }
    })
    .catch(e => {
      api.error(res, e.message, 500);
    });
}

async function deleteWanted(req, res, next) {
  try {
    const wanted = await WantedService.deleteWanted(req.params.wantedId);
    if (wanted) {
      api.ok(res, wanted);
    } else {
      api.error(res, "Wanted not found", 404);
    }
  } catch (e) {
    api.error(res, e.message, 500);
  }
}

function getAll(req, res, next) {
  WantedService.getAll(req.UserId)
    .then(list => {
      api.ok(res, list);
    })
    .catch(e => {
      api.error(res, e.message, 500);
    });
}

function getProperties(req, res, next) {
  WantedService.getProperties()
    .then(result => {
      api.ok(res, result);
    })
    .catch(e => {
      api.error(res, e.message, 500);
    });
}

module.exports = {
  getAll,
  getDetail,
  addWanted,
  updateWanted,
  deleteWanted,
  getProperties,
  preregister
};
