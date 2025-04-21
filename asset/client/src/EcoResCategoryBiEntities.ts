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
import type { EcoResCategoryBiEntitiesApi } from './EcoResCategoryBiEntitiesApi';
import { NoYes } from './NoYes';
import { EcoResCategoryChangeStatus } from './EcoResCategoryChangeStatus';
import { PcComponentConfigurationReuseType } from './PcComponentConfigurationReuseType';

/**
 * This class represents the entity "EcoResCategoryBiEntities" of service "d365_metadata".
 */
export class EcoResCategoryBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EcoResCategoryBiEntitiesType<T>
{
  /**
   * Technical entity name for EcoResCategoryBiEntities.
   */
  static override _entityName = 'EcoResCategoryBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EcoResCategoryBiEntities entity.
   */
  static _keys = ['Name', 'CategoryHierarchy'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Category Hierarchy.
   */
  declare categoryHierarchy: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Nested Set Right.
   */
  declare nestedSetRight: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Force Full Lookup Sync.
   * @nullable
   */
  declare forceFullLookupSync?: NoYes | null;
  /**
   * Service Accounting Code Table In.
   */
  declare serviceAccountingCodeTableIn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Default Threshold Psn.
   */
  declare defaultThresholdPsn: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Nested Set Left.
   */
  declare nestedSetLeft: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Is Tangible.
   * @nullable
   */
  declare isTangible?: NoYes | null;
  /**
   * Parent Category.
   */
  declare parentCategory: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Is Active.
   * @nullable
   */
  declare isActive?: NoYes | null;
  /**
   * Is Category Attributes Inherited.
   * @nullable
   */
  declare isCategoryAttributesInherited?: NoYes | null;
  /**
   * Non Gst In.
   * @nullable
   */
  declare nonGstIn?: NoYes | null;
  /**
   * Instance Relation Type.
   */
  declare instanceRelationType: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Display Order.
   */
  declare displayOrder: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Exempt In.
   * @nullable
   */
  declare exemptIn?: NoYes | null;
  /**
   * External Id.
   */
  declare externalId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Hsn Code Table In.
   */
  declare hsnCodeTableIn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Code.
   * @nullable
   */
  declare code?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Level.
   */
  declare level: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Change Status.
   * @nullable
   */
  declare changeStatus?: EcoResCategoryChangeStatus | null;
  /**
   * Pk Wi U Code.
   * @nullable
   */
  declare pkWiUCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Default Project Global Category.
   */
  declare defaultProjectGlobalCategory: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Reuse Enabled.
   * @nullable
   */
  declare reuseEnabled?: PcComponentConfigurationReuseType | null;

  constructor(_entityApi: EcoResCategoryBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface EcoResCategoryBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  categoryHierarchy: DeserializedType<T, 'Edm.Int64'>;
  nestedSetRight: DeserializedType<T, 'Edm.Int64'>;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  forceFullLookupSync?: NoYes | null;
  serviceAccountingCodeTableIn: DeserializedType<T, 'Edm.Int64'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  defaultThresholdPsn: DeserializedType<T, 'Edm.Decimal'>;
  nestedSetLeft: DeserializedType<T, 'Edm.Int64'>;
  isTangible?: NoYes | null;
  parentCategory: DeserializedType<T, 'Edm.Int64'>;
  isActive?: NoYes | null;
  isCategoryAttributesInherited?: NoYes | null;
  nonGstIn?: NoYes | null;
  instanceRelationType: DeserializedType<T, 'Edm.Int64'>;
  displayOrder: DeserializedType<T, 'Edm.Decimal'>;
  exemptIn?: NoYes | null;
  externalId: DeserializedType<T, 'Edm.Guid'>;
  hsnCodeTableIn: DeserializedType<T, 'Edm.Int64'>;
  code?: DeserializedType<T, 'Edm.String'> | null;
  level: DeserializedType<T, 'Edm.Int64'>;
  changeStatus?: EcoResCategoryChangeStatus | null;
  pkWiUCode?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  defaultProjectGlobalCategory: DeserializedType<T, 'Edm.Int64'>;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  reuseEnabled?: PcComponentConfigurationReuseType | null;
}
