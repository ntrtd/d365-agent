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
import type { AdditionalFieldsValuesApi } from './AdditionalFieldsValuesApi';
import { EmAccountType } from './EmAccountType';
import { TableGroupAll } from './TableGroupAll';

/**
 * This class represents the entity "AdditionalFieldsValues" of service "d365_metadata".
 */
export class AdditionalFieldsValues<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AdditionalFieldsValuesType<T>
{
  /**
   * Technical entity name for AdditionalFieldsValues.
   */
  static override _entityName = 'AdditionalFieldsValues';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AdditionalFieldsValues entity.
   */
  static _keys = [
    'dataAreaId',
    'FieldName',
    'FieldValue',
    'AccountType',
    'AccountCode',
    'AccountRelation',
    'Effective',
    'Expiration'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Field Name.
   */
  declare fieldName: DeserializedType<T, 'Edm.String'>;
  /**
   * Field Value.
   */
  declare fieldValue: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Type.
   * @nullable
   */
  declare accountType?: EmAccountType | null;
  /**
   * Account Code.
   * @nullable
   */
  declare accountCode?: TableGroupAll | null;
  /**
   * Account Relation.
   */
  declare accountRelation: DeserializedType<T, 'Edm.String'>;
  /**
   * Effective.
   */
  declare effective: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Expiration.
   */
  declare expiration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: AdditionalFieldsValuesApi<T>) {
    super(_entityApi);
  }
}

export interface AdditionalFieldsValuesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  fieldName: DeserializedType<T, 'Edm.String'>;
  fieldValue: DeserializedType<T, 'Edm.String'>;
  accountType?: EmAccountType | null;
  accountCode?: TableGroupAll | null;
  accountRelation: DeserializedType<T, 'Edm.String'>;
  effective: DeserializedType<T, 'Edm.DateTimeOffset'>;
  expiration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
