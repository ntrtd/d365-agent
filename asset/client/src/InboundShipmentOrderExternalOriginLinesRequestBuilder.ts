/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  GetAllRequestBuilder,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { InboundShipmentOrderExternalOriginLines } from './InboundShipmentOrderExternalOriginLines';

/**
 * Request builder class for operations supported on the {@link InboundShipmentOrderExternalOriginLines} entity.
 */
export class InboundShipmentOrderExternalOriginLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InboundShipmentOrderExternalOriginLines<T>, T> {
  /**
   * Returns a request builder for querying all `InboundShipmentOrderExternalOriginLines` entities.
   * @returns A request builder for creating requests to retrieve all `InboundShipmentOrderExternalOriginLines` entities.
   */
  getAll(): GetAllRequestBuilder<
    InboundShipmentOrderExternalOriginLines<T>,
    T
  > {
    return new GetAllRequestBuilder<
      InboundShipmentOrderExternalOriginLines<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InboundShipmentOrderExternalOriginLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InboundShipmentOrderExternalOriginLines`.
   */
  create(
    entity: InboundShipmentOrderExternalOriginLines<T>
  ): CreateRequestBuilder<InboundShipmentOrderExternalOriginLines<T>, T> {
    return new CreateRequestBuilder<
      InboundShipmentOrderExternalOriginLines<T>,
      T
    >(this.entityApi, entity);
  }
}
