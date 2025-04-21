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
import type { VatNumTablesApi } from './VatNumTablesApi';
import { LegalEntities, LegalEntitiesType } from './LegalEntities';

/**
 * This class represents the entity "VATNumTables" of service "d365_metadata".
 */
export class VatNumTables<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements VatNumTablesType<T>
{
  /**
   * Technical entity name for VatNumTables.
   */
  static override _entityName = 'VATNumTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VatNumTables entity.
   */
  static _keys = ['dataAreaId', 'VATNum', 'CountryRegionId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Vat Num.
   */
  declare vatNum: DeserializedType<T, 'Edm.String'>;
  /**
   * Country Region Id.
   */
  declare countryRegionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link LegalEntities} entity.
   */
  declare legalEntityImportVatNumTaxVatNum: LegalEntities<T>[];
  /**
   * One-to-many navigation property to the {@link LegalEntities} entity.
   */
  declare legalEntityVatNumTaxVatNum: LegalEntities<T>[];

  constructor(_entityApi: VatNumTablesApi<T>) {
    super(_entityApi);
  }
}

export interface VatNumTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  vatNum: DeserializedType<T, 'Edm.String'>;
  countryRegionId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  legalEntityImportVatNumTaxVatNum: LegalEntitiesType<T>[];
  legalEntityVatNumTaxVatNum: LegalEntitiesType<T>[];
}
