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
import type { PropertyTypeApplicabilitySetupsApi } from './PropertyTypeApplicabilitySetupsApi';

/**
 * This class represents the entity "PropertyTypeApplicabilitySetups" of service "d365_metadata".
 */
export class PropertyTypeApplicabilitySetups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PropertyTypeApplicabilitySetupsType<T>
{
  /**
   * Technical entity name for PropertyTypeApplicabilitySetups.
   */
  static override _entityName = 'PropertyTypeApplicabilitySetups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PropertyTypeApplicabilitySetups entity.
   */
  static _keys = ['PropertyType', 'TableName'];
  /**
   * Property Type.
   */
  declare propertyType: DeserializedType<T, 'Edm.String'>;
  /**
   * Table Name.
   */
  declare tableName: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: PropertyTypeApplicabilitySetupsApi<T>) {
    super(_entityApi);
  }
}

export interface PropertyTypeApplicabilitySetupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  propertyType: DeserializedType<T, 'Edm.String'>;
  tableName: DeserializedType<T, 'Edm.String'>;
}
