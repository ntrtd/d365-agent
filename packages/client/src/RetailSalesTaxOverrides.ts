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
import type { RetailSalesTaxOverridesApi } from './RetailSalesTaxOverridesApi';
import { RetailTaxOverrideType } from './RetailTaxOverrideType';
import { RetailOverrideFrom } from './RetailOverrideFrom';
import { RetailTaxOverrideBy } from './RetailTaxOverrideBy';
import { RetailOverrideTo } from './RetailOverrideTo';
import { EnableDisable } from './EnableDisable';

/**
 * This class represents the entity "RetailSalesTaxOverrides" of service "d365_metadata".
 */
export class RetailSalesTaxOverrides<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailSalesTaxOverridesType<T>
{
  /**
   * Technical entity name for RetailSalesTaxOverrides.
   */
  static override _entityName = 'RetailSalesTaxOverrides';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailSalesTaxOverrides entity.
   */
  static _keys = ['dataAreaId', 'Code'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Code.
   */
  declare code: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Destination Tax Group.
   * @nullable
   */
  declare destinationTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Tax Group.
   * @nullable
   */
  declare sourceTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Override Type.
   * @nullable
   */
  declare overrideType?: RetailTaxOverrideType | null;
  /**
   * Override From.
   * @nullable
   */
  declare overrideFrom?: RetailOverrideFrom | null;
  /**
   * Override By.
   * @nullable
   */
  declare overrideBy?: RetailTaxOverrideBy | null;
  /**
   * Override To.
   * @nullable
   */
  declare overrideTo?: RetailOverrideTo | null;
  /**
   * Additional Description.
   * @nullable
   */
  declare additionalDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: EnableDisable | null;
  /**
   * Source Item Tax Group.
   * @nullable
   */
  declare sourceItemTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Destination Item Tax Group.
   * @nullable
   */
  declare destinationItemTaxGroup?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailSalesTaxOverridesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailSalesTaxOverridesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  code: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  destinationTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  sourceTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  overrideType?: RetailTaxOverrideType | null;
  overrideFrom?: RetailOverrideFrom | null;
  overrideBy?: RetailTaxOverrideBy | null;
  overrideTo?: RetailOverrideTo | null;
  additionalDescription?: DeserializedType<T, 'Edm.String'> | null;
  status?: EnableDisable | null;
  sourceItemTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  destinationItemTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
}
