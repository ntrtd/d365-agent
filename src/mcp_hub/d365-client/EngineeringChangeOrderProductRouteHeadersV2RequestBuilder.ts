/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { EngineeringChangeOrderProductRouteHeadersV2 } from './EngineeringChangeOrderProductRouteHeadersV2';

/**
 * Request builder class for operations supported on the {@link EngineeringChangeOrderProductRouteHeadersV2} entity.
 */
export class EngineeringChangeOrderProductRouteHeadersV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EngineeringChangeOrderProductRouteHeadersV2<T>, T> {
  /**
   * Returns a request builder for querying all `EngineeringChangeOrderProductRouteHeadersV2` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringChangeOrderProductRouteHeadersV2` entities.
   */
  getAll(): GetAllRequestBuilder<
    EngineeringChangeOrderProductRouteHeadersV2<T>,
    T
  > {
    return new GetAllRequestBuilder<
      EngineeringChangeOrderProductRouteHeadersV2<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EngineeringChangeOrderProductRouteHeadersV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringChangeOrderProductRouteHeadersV2`.
   */
  create(
    entity: EngineeringChangeOrderProductRouteHeadersV2<T>
  ): CreateRequestBuilder<EngineeringChangeOrderProductRouteHeadersV2<T>, T> {
    return new CreateRequestBuilder<
      EngineeringChangeOrderProductRouteHeadersV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `EngineeringChangeOrderProductRouteHeadersV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductRouteHeadersV2.dataAreaId}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductRouteHeadersV2.engineeringChangeOrderNumber}.
   * @param engineeringChangeOrderProductLineNumber Key property. See {@link EngineeringChangeOrderProductRouteHeadersV2.engineeringChangeOrderProductLineNumber}.
   * @param creationSequenceNumber Key property. See {@link EngineeringChangeOrderProductRouteHeadersV2.creationSequenceNumber}.
   * @returns A request builder for creating requests to retrieve one `EngineeringChangeOrderProductRouteHeadersV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>,
    engineeringChangeOrderProductLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    creationSequenceNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<EngineeringChangeOrderProductRouteHeadersV2<T>, T> {
    return new GetByKeyRequestBuilder<
      EngineeringChangeOrderProductRouteHeadersV2<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      EngineeringChangeOrderNumber: engineeringChangeOrderNumber,
      EngineeringChangeOrderProductLineNumber:
        engineeringChangeOrderProductLineNumber,
      CreationSequenceNumber: creationSequenceNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringChangeOrderProductRouteHeadersV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringChangeOrderProductRouteHeadersV2`.
   */
  update(
    entity: EngineeringChangeOrderProductRouteHeadersV2<T>
  ): UpdateRequestBuilder<EngineeringChangeOrderProductRouteHeadersV2<T>, T> {
    return new UpdateRequestBuilder<
      EngineeringChangeOrderProductRouteHeadersV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductRouteHeadersV2`.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductRouteHeadersV2.dataAreaId}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductRouteHeadersV2.engineeringChangeOrderNumber}.
   * @param engineeringChangeOrderProductLineNumber Key property. See {@link EngineeringChangeOrderProductRouteHeadersV2.engineeringChangeOrderProductLineNumber}.
   * @param creationSequenceNumber Key property. See {@link EngineeringChangeOrderProductRouteHeadersV2.creationSequenceNumber}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductRouteHeadersV2`.
   */
  delete(
    dataAreaId: string,
    engineeringChangeOrderNumber: string,
    engineeringChangeOrderProductLineNumber: BigNumber,
    creationSequenceNumber: number
  ): DeleteRequestBuilder<EngineeringChangeOrderProductRouteHeadersV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductRouteHeadersV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductRouteHeadersV2` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringChangeOrderProductRouteHeadersV2<T>
  ): DeleteRequestBuilder<EngineeringChangeOrderProductRouteHeadersV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    engineeringChangeOrderNumber?: string,
    engineeringChangeOrderProductLineNumber?: BigNumber,
    creationSequenceNumber?: number
  ): DeleteRequestBuilder<EngineeringChangeOrderProductRouteHeadersV2<T>, T> {
    return new DeleteRequestBuilder<
      EngineeringChangeOrderProductRouteHeadersV2<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof EngineeringChangeOrderProductRouteHeadersV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            EngineeringChangeOrderNumber: engineeringChangeOrderNumber!,
            EngineeringChangeOrderProductLineNumber:
              engineeringChangeOrderProductLineNumber!,
            CreationSequenceNumber: creationSequenceNumber!
          }
    );
  }
}
