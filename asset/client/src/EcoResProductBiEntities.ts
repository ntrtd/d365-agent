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
import type { EcoResProductBiEntitiesApi } from './EcoResProductBiEntitiesApi';
import { EcoResProductServiceType } from './EcoResProductServiceType';
import { EcoResProductType } from './EcoResProductType';
import { NoYes } from './NoYes';
import { EcoResVariantConfigurationTechnologyType } from './EcoResVariantConfigurationTechnologyType';

/**
 * This class represents the entity "EcoResProductBiEntities" of service "d365_metadata".
 */
export class EcoResProductBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EcoResProductBiEntitiesType<T>
{
  /**
   * Technical entity name for EcoResProductBiEntities.
   */
  static override _entityName = 'EcoResProductBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EcoResProductBiEntities entity.
   */
  static _keys = ['DisplayProductNumber'];
  /**
   * Display Product Number.
   */
  declare displayProductNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Service Type.
   * @nullable
   */
  declare serviceType?: EcoResProductServiceType | null;
  /**
   * Product Type.
   * @nullable
   */
  declare productType?: EcoResProductType | null;
  /**
   * Retail Size Group Id.
   * @nullable
   */
  declare retailSizeGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Retai Total Weight.
   */
  declare retaiTotalWeight: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Instance Relation Type.
   */
  declare instanceRelationType: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Search Name.
   * @nullable
   */
  declare searchName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Product Variant Unit Conversion Enabled.
   * @nullable
   */
  declare isProductVariantUnitConversionEnabled?: NoYes | null;
  /**
   * Retail Color Group Id.
   * @nullable
   */
  declare retailColorGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Master.
   */
  declare productMaster: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Pds Cw Product.
   * @nullable
   */
  declare pdsCwProduct?: NoYes | null;
  /**
   * Retail Style Group Id.
   * @nullable
   */
  declare retailStyleGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Variant Configuration Technology.
   * @nullable
   */
  declare variantConfigurationTechnology?: EcoResVariantConfigurationTechnologyType | null;

  constructor(_entityApi: EcoResProductBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface EcoResProductBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  displayProductNumber: DeserializedType<T, 'Edm.String'>;
  serviceType?: EcoResProductServiceType | null;
  productType?: EcoResProductType | null;
  retailSizeGroupId?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  retaiTotalWeight: DeserializedType<T, 'Edm.Int32'>;
  instanceRelationType: DeserializedType<T, 'Edm.Int64'>;
  searchName?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  isProductVariantUnitConversionEnabled?: NoYes | null;
  retailColorGroupId?: DeserializedType<T, 'Edm.String'> | null;
  productMaster: DeserializedType<T, 'Edm.Int64'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  pdsCwProduct?: NoYes | null;
  retailStyleGroupId?: DeserializedType<T, 'Edm.String'> | null;
  variantConfigurationTechnology?: EcoResVariantConfigurationTechnologyType | null;
}
