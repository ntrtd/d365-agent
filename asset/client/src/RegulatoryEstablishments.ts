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
import type { RegulatoryEstablishmentsApi } from './RegulatoryEstablishmentsApi';
import {
  RegulatoryEstablishmentDetails,
  RegulatoryEstablishmentDetailsType
} from './RegulatoryEstablishmentDetails';

/**
 * This class represents the entity "RegulatoryEstablishments" of service "d365_metadata".
 */
export class RegulatoryEstablishments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RegulatoryEstablishmentsType<T>
{
  /**
   * Technical entity name for RegulatoryEstablishments.
   */
  static override _entityName = 'RegulatoryEstablishments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RegulatoryEstablishments entity.
   */
  static _keys = ['RegulatoryEstablishmentId'];
  /**
   * Regulatory Establishment Id.
   */
  declare regulatoryEstablishmentId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link RegulatoryEstablishmentDetails} entity.
   */
  declare establishmentDetails: RegulatoryEstablishmentDetails<T>[];

  constructor(_entityApi: RegulatoryEstablishmentsApi<T>) {
    super(_entityApi);
  }
}

export interface RegulatoryEstablishmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  regulatoryEstablishmentId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  establishmentDetails: RegulatoryEstablishmentDetailsType<T>[];
}
