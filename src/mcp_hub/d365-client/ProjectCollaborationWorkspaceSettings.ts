/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { ProjectCollaborationWorkspaceSettingsApi } from './ProjectCollaborationWorkspaceSettingsApi';
import { CollabSiteEntityType } from './CollabSiteEntityType';
import { NoYes } from './NoYes';
import { CollabSiteSharePointType } from './CollabSiteSharePointType';

/**
 * This class represents the entity "ProjectCollaborationWorkspaceSettings" of service "d365_metadata".
 */
export class ProjectCollaborationWorkspaceSettings<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjectCollaborationWorkspaceSettingsType<T>
{
  /**
   * Technical entity name for ProjectCollaborationWorkspaceSettings.
   */
  static override _entityName = 'ProjectCollaborationWorkspaceSettings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectCollaborationWorkspaceSettings entity.
   */
  static _keys = ['dataAreaId', 'BusinessArea'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Business Area.
   * @nullable
   */
  declare businessArea?: CollabSiteEntityType | null;
  /**
   * Is Workspace Auto Created.
   * @nullable
   */
  declare isWorkspaceAutoCreated?: NoYes | null;
  /**
   * Is Creating Workspace Prompted.
   * @nullable
   */
  declare isCreatingWorkspacePrompted?: NoYes | null;
  /**
   * Share Point Version.
   * @nullable
   */
  declare sharePointVersion?: CollabSiteSharePointType | null;
  /**
   * Is Deleting Workspace Prompted.
   * @nullable
   */
  declare isDeletingWorkspacePrompted?: NoYes | null;
  /**
   * Workspace Home Page.
   * @nullable
   */
  declare workspaceHomePage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Template.
   * @nullable
   */
  declare template?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Workspace Auto Created For Time.
   * @nullable
   */
  declare isWorkspaceAutoCreatedForTime?: NoYes | null;
  /**
   * Is Workspace Auto Created For Cost.
   * @nullable
   */
  declare isWorkspaceAutoCreatedForCost?: NoYes | null;
  /**
   * Is Workspace Auto Created For Internal.
   * @nullable
   */
  declare isWorkspaceAutoCreatedForInternal?: NoYes | null;
  /**
   * Store Ms Project Files.
   * @nullable
   */
  declare storeMsProjectFiles?: NoYes | null;
  /**
   * Is Workspace Auto Created For Investment.
   * @nullable
   */
  declare isWorkspaceAutoCreatedForInvestment?: NoYes | null;
  /**
   * Is Workspace Auto Created For Time Material.
   * @nullable
   */
  declare isWorkspaceAutoCreatedForTimeMaterial?: NoYes | null;
  /**
   * Is Workspace Auto Created For Fixed Price.
   * @nullable
   */
  declare isWorkspaceAutoCreatedForFixedPrice?: NoYes | null;
  /**
   * Sync Task Lists.
   * @nullable
   */
  declare syncTaskLists?: NoYes | null;

  constructor(_entityApi: ProjectCollaborationWorkspaceSettingsApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectCollaborationWorkspaceSettingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  businessArea?: CollabSiteEntityType | null;
  isWorkspaceAutoCreated?: NoYes | null;
  isCreatingWorkspacePrompted?: NoYes | null;
  sharePointVersion?: CollabSiteSharePointType | null;
  isDeletingWorkspacePrompted?: NoYes | null;
  workspaceHomePage?: DeserializedType<T, 'Edm.String'> | null;
  template?: DeserializedType<T, 'Edm.String'> | null;
  isWorkspaceAutoCreatedForTime?: NoYes | null;
  isWorkspaceAutoCreatedForCost?: NoYes | null;
  isWorkspaceAutoCreatedForInternal?: NoYes | null;
  storeMsProjectFiles?: NoYes | null;
  isWorkspaceAutoCreatedForInvestment?: NoYes | null;
  isWorkspaceAutoCreatedForTimeMaterial?: NoYes | null;
  isWorkspaceAutoCreatedForFixedPrice?: NoYes | null;
  syncTaskLists?: NoYes | null;
}
