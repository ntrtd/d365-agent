/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { FundTypes } from './FundTypes';

/**
 * Request builder class for operations supported on the {@link FundTypes} entity.
 */
export class FundTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FundTypes<T>, T> {
  /**
   * Returns a request builder for querying all `FundTypes` entities.
   * @returns A request builder for creating requests to retrieve all `FundTypes` entities.
   */
  getAll(): GetAllRequestBuilder<FundTypes<T>, T> {
    return new GetAllRequestBuilder<FundTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FundTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FundTypes`.
   */
  create(entity: FundTypes<T>): CreateRequestBuilder<FundTypes<T>, T> {
    return new CreateRequestBuilder<FundTypes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `FundTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link FundTypes.dataAreaId}.
   * @param fundType Key property. See {@link FundTypes.fundType}.
   * @returns A request builder for creating requests to retrieve one `FundTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    fundType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FundTypes<T>, T> {
    return new GetByKeyRequestBuilder<FundTypes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      FundType: fundType
    });
  }

  /**
   * Returns a request builder for updating an entity of type `FundTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FundTypes`.
   */
  update(entity: FundTypes<T>): UpdateRequestBuilder<FundTypes<T>, T> {
    return new UpdateRequestBuilder<FundTypes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `FundTypes`.
   * @param dataAreaId Key property. See {@link FundTypes.dataAreaId}.
   * @param fundType Key property. See {@link FundTypes.fundType}.
   * @returns A request builder for creating requests that delete an entity of type `FundTypes`.
   */
  delete(
    dataAreaId: string,
    fundType: string
  ): DeleteRequestBuilder<FundTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FundTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FundTypes` by taking the entity as a parameter.
   */
  delete(entity: FundTypes<T>): DeleteRequestBuilder<FundTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    fundType?: string
  ): DeleteRequestBuilder<FundTypes<T>, T> {
    return new DeleteRequestBuilder<FundTypes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof FundTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FundType: fundType!
          }
    );
  }
}
