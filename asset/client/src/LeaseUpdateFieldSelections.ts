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
import type { LeaseUpdateFieldSelectionsApi } from './LeaseUpdateFieldSelectionsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "LeaseUpdateFieldSelections" of service "d365_metadata".
 */
export class LeaseUpdateFieldSelections<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LeaseUpdateFieldSelectionsType<T>
{
  /**
   * Technical entity name for LeaseUpdateFieldSelections.
   */
  static override _entityName = 'LeaseUpdateFieldSelections';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeaseUpdateFieldSelections entity.
   */
  static _keys = ['FieldId', 'RefTableId'];
  /**
   * Field Id.
   */
  declare fieldId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Ref Table Id.
   */
  declare refTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Field Type.
   * @nullable
   */
  declare fieldType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Field Name.
   * @nullable
   */
  declare fieldName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Import Table Name.
   * @nullable
   */
  declare importTableName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ref Rec Id.
   */
  declare refRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Select For Update.
   * @nullable
   */
  declare selectForUpdate?: NoYes | null;

  constructor(_entityApi: LeaseUpdateFieldSelectionsApi<T>) {
    super(_entityApi);
  }
}

export interface LeaseUpdateFieldSelectionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  fieldId: DeserializedType<T, 'Edm.Int32'>;
  refTableId: DeserializedType<T, 'Edm.Int32'>;
  fieldType?: DeserializedType<T, 'Edm.String'> | null;
  fieldName?: DeserializedType<T, 'Edm.String'> | null;
  importTableName?: DeserializedType<T, 'Edm.String'> | null;
  refRecId: DeserializedType<T, 'Edm.Int64'>;
  selectForUpdate?: NoYes | null;
}
