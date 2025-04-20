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
import type { InjuryBodyPartsApi } from './InjuryBodyPartsApi';
import { InjuryIncidents, InjuryIncidentsType } from './InjuryIncidents';

/**
 * This class represents the entity "InjuryBodyParts" of service "d365_metadata".
 */
export class InjuryBodyParts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements InjuryBodyPartsType<T>
{
  /**
   * Technical entity name for InjuryBodyParts.
   */
  static override _entityName = 'InjuryBodyParts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InjuryBodyParts entity.
   */
  static _keys = ['BodyPartId'];
  /**
   * Body Part Id.
   */
  declare bodyPartId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link InjuryIncidents} entity.
   */
  declare injuryIncidents: InjuryIncidents<T>[];

  constructor(_entityApi: InjuryBodyPartsApi<T>) {
    super(_entityApi);
  }
}

export interface InjuryBodyPartsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  bodyPartId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  injuryIncidents: InjuryIncidentsType<T>[];
}
