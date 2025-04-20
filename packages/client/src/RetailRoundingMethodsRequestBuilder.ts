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
import { RetailRoundingMethods } from './RetailRoundingMethods';

/**
 * Request builder class for operations supported on the {@link RetailRoundingMethods} entity.
 */
export class RetailRoundingMethodsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailRoundingMethods<T>, T> {
  /**
   * Returns a request builder for querying all `RetailRoundingMethods` entities.
   * @returns A request builder for creating requests to retrieve all `RetailRoundingMethods` entities.
   */
  getAll(): GetAllRequestBuilder<RetailRoundingMethods<T>, T> {
    return new GetAllRequestBuilder<RetailRoundingMethods<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailRoundingMethods` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailRoundingMethods`.
   */
  create(
    entity: RetailRoundingMethods<T>
  ): CreateRequestBuilder<RetailRoundingMethods<T>, T> {
    return new CreateRequestBuilder<RetailRoundingMethods<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailRoundingMethods` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailRoundingMethods.dataAreaId}.
   * @param roundingMethodId Key property. See {@link RetailRoundingMethods.roundingMethodId}.
   * @param minimum Key property. See {@link RetailRoundingMethods.minimum}.
   * @returns A request builder for creating requests to retrieve one `RetailRoundingMethods` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    roundingMethodId: DeserializedType<T, 'Edm.String'>,
    minimum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RetailRoundingMethods<T>, T> {
    return new GetByKeyRequestBuilder<RetailRoundingMethods<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RoundingMethodId: roundingMethodId,
        Minimum: minimum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailRoundingMethods`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailRoundingMethods`.
   */
  update(
    entity: RetailRoundingMethods<T>
  ): UpdateRequestBuilder<RetailRoundingMethods<T>, T> {
    return new UpdateRequestBuilder<RetailRoundingMethods<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailRoundingMethods`.
   * @param dataAreaId Key property. See {@link RetailRoundingMethods.dataAreaId}.
   * @param roundingMethodId Key property. See {@link RetailRoundingMethods.roundingMethodId}.
   * @param minimum Key property. See {@link RetailRoundingMethods.minimum}.
   * @returns A request builder for creating requests that delete an entity of type `RetailRoundingMethods`.
   */
  delete(
    dataAreaId: string,
    roundingMethodId: string,
    minimum: BigNumber
  ): DeleteRequestBuilder<RetailRoundingMethods<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailRoundingMethods`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailRoundingMethods` by taking the entity as a parameter.
   */
  delete(
    entity: RetailRoundingMethods<T>
  ): DeleteRequestBuilder<RetailRoundingMethods<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    roundingMethodId?: string,
    minimum?: BigNumber
  ): DeleteRequestBuilder<RetailRoundingMethods<T>, T> {
    return new DeleteRequestBuilder<RetailRoundingMethods<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailRoundingMethods
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RoundingMethodId: roundingMethodId!,
            Minimum: minimum!
          }
    );
  }
}
