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
import { DepreciationRates } from './DepreciationRates';

/**
 * Request builder class for operations supported on the {@link DepreciationRates} entity.
 */
export class DepreciationRatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DepreciationRates<T>, T> {
  /**
   * Returns a request builder for querying all `DepreciationRates` entities.
   * @returns A request builder for creating requests to retrieve all `DepreciationRates` entities.
   */
  getAll(): GetAllRequestBuilder<DepreciationRates<T>, T> {
    return new GetAllRequestBuilder<DepreciationRates<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DepreciationRates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DepreciationRates`.
   */
  create(
    entity: DepreciationRates<T>
  ): CreateRequestBuilder<DepreciationRates<T>, T> {
    return new CreateRequestBuilder<DepreciationRates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DepreciationRates` entity based on its keys.
   * @param dataAreaId Key property. See {@link DepreciationRates.dataAreaId}.
   * @param name Key property. See {@link DepreciationRates.name}.
   * @param usefulLife Key property. See {@link DepreciationRates.usefulLife}.
   * @returns A request builder for creating requests to retrieve one `DepreciationRates` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>,
    usefulLife: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<DepreciationRates<T>, T> {
    return new GetByKeyRequestBuilder<DepreciationRates<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Name: name,
      UsefulLife: usefulLife
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DepreciationRates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DepreciationRates`.
   */
  update(
    entity: DepreciationRates<T>
  ): UpdateRequestBuilder<DepreciationRates<T>, T> {
    return new UpdateRequestBuilder<DepreciationRates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DepreciationRates`.
   * @param dataAreaId Key property. See {@link DepreciationRates.dataAreaId}.
   * @param name Key property. See {@link DepreciationRates.name}.
   * @param usefulLife Key property. See {@link DepreciationRates.usefulLife}.
   * @returns A request builder for creating requests that delete an entity of type `DepreciationRates`.
   */
  delete(
    dataAreaId: string,
    name: string,
    usefulLife: BigNumber
  ): DeleteRequestBuilder<DepreciationRates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DepreciationRates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DepreciationRates` by taking the entity as a parameter.
   */
  delete(
    entity: DepreciationRates<T>
  ): DeleteRequestBuilder<DepreciationRates<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    name?: string,
    usefulLife?: BigNumber
  ): DeleteRequestBuilder<DepreciationRates<T>, T> {
    return new DeleteRequestBuilder<DepreciationRates<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DepreciationRates
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Name: name!,
            UsefulLife: usefulLife!
          }
    );
  }
}
