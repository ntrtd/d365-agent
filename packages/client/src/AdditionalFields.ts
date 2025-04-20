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
import type { AdditionalFieldsApi } from './AdditionalFieldsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "AdditionalFields" of service "d365_metadata".
 */
export class AdditionalFields<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AdditionalFieldsType<T>
{
  /**
   * Technical entity name for AdditionalFields.
   */
  static override _entityName = 'AdditionalFields';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AdditionalFields entity.
   */
  static _keys = ['dataAreaId', 'FieldName'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Field Name.
   */
  declare fieldName: DeserializedType<T, 'Edm.String'>;
  /**
   * User Edit.
   * @nullable
   */
  declare userEdit?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Hidden.
   * @nullable
   */
  declare isHidden?: NoYes | null;
  /**
   * Is Counter.
   * @nullable
   */
  declare isCounter?: NoYes | null;

  constructor(_entityApi: AdditionalFieldsApi<T>) {
    super(_entityApi);
  }
}

export interface AdditionalFieldsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  fieldName: DeserializedType<T, 'Edm.String'>;
  userEdit?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  isHidden?: NoYes | null;
  isCounter?: NoYes | null;
}
