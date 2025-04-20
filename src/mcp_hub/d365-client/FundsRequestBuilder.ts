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
import { Funds } from './Funds';

/**
 * Request builder class for operations supported on the {@link Funds} entity.
 */
export class FundsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Funds<T>, T> {
  /**
   * Returns a request builder for querying all `Funds` entities.
   * @returns A request builder for creating requests to retrieve all `Funds` entities.
   */
  getAll(): GetAllRequestBuilder<Funds<T>, T> {
    return new GetAllRequestBuilder<Funds<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Funds` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Funds`.
   */
  create(entity: Funds<T>): CreateRequestBuilder<Funds<T>, T> {
    return new CreateRequestBuilder<Funds<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Funds` entity based on its keys.
   * @param dataAreaId Key property. See {@link Funds.dataAreaId}.
   * @param fundNumber Key property. See {@link Funds.fundNumber}.
   * @returns A request builder for creating requests to retrieve one `Funds` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    fundNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Funds<T>, T> {
    return new GetByKeyRequestBuilder<Funds<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      FundNumber: fundNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Funds`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Funds`.
   */
  update(entity: Funds<T>): UpdateRequestBuilder<Funds<T>, T> {
    return new UpdateRequestBuilder<Funds<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Funds`.
   * @param dataAreaId Key property. See {@link Funds.dataAreaId}.
   * @param fundNumber Key property. See {@link Funds.fundNumber}.
   * @returns A request builder for creating requests that delete an entity of type `Funds`.
   */
  delete(
    dataAreaId: string,
    fundNumber: string
  ): DeleteRequestBuilder<Funds<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Funds`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Funds` by taking the entity as a parameter.
   */
  delete(entity: Funds<T>): DeleteRequestBuilder<Funds<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    fundNumber?: string
  ): DeleteRequestBuilder<Funds<T>, T> {
    return new DeleteRequestBuilder<Funds<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof Funds
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FundNumber: fundNumber!
          }
    );
  }
}
