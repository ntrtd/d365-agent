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
import { InboundShipmentOrderExternalOrigins } from './InboundShipmentOrderExternalOrigins';

/**
 * Request builder class for operations supported on the {@link InboundShipmentOrderExternalOrigins} entity.
 */
export class InboundShipmentOrderExternalOriginsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InboundShipmentOrderExternalOrigins<T>, T> {
  /**
   * Returns a request builder for querying all `InboundShipmentOrderExternalOrigins` entities.
   * @returns A request builder for creating requests to retrieve all `InboundShipmentOrderExternalOrigins` entities.
   */
  getAll(): GetAllRequestBuilder<InboundShipmentOrderExternalOrigins<T>, T> {
    return new GetAllRequestBuilder<InboundShipmentOrderExternalOrigins<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InboundShipmentOrderExternalOrigins` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InboundShipmentOrderExternalOrigins`.
   */
  create(
    entity: InboundShipmentOrderExternalOrigins<T>
  ): CreateRequestBuilder<InboundShipmentOrderExternalOrigins<T>, T> {
    return new CreateRequestBuilder<InboundShipmentOrderExternalOrigins<T>, T>(
      this.entityApi,
      entity
    );
  }
}
