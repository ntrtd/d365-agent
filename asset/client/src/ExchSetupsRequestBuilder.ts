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
import { ExchSetups } from './ExchSetups';

/**
 * Request builder class for operations supported on the {@link ExchSetups} entity.
 */
export class ExchSetupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExchSetups<T>, T> {
  /**
   * Returns a request builder for querying all `ExchSetups` entities.
   * @returns A request builder for creating requests to retrieve all `ExchSetups` entities.
   */
  getAll(): GetAllRequestBuilder<ExchSetups<T>, T> {
    return new GetAllRequestBuilder<ExchSetups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ExchSetups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExchSetups`.
   */
  create(entity: ExchSetups<T>): CreateRequestBuilder<ExchSetups<T>, T> {
    return new CreateRequestBuilder<ExchSetups<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ExchSetups` entity based on its keys.
   * @param dataAreaId Key property. See {@link ExchSetups.dataAreaId}.
   * @param exchangeCode Key property. See {@link ExchSetups.exchangeCode}.
   * @returns A request builder for creating requests to retrieve one `ExchSetups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    exchangeCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ExchSetups<T>, T> {
    return new GetByKeyRequestBuilder<ExchSetups<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ExchangeCode: exchangeCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ExchSetups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExchSetups`.
   */
  update(entity: ExchSetups<T>): UpdateRequestBuilder<ExchSetups<T>, T> {
    return new UpdateRequestBuilder<ExchSetups<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ExchSetups`.
   * @param dataAreaId Key property. See {@link ExchSetups.dataAreaId}.
   * @param exchangeCode Key property. See {@link ExchSetups.exchangeCode}.
   * @returns A request builder for creating requests that delete an entity of type `ExchSetups`.
   */
  delete(
    dataAreaId: string,
    exchangeCode: string
  ): DeleteRequestBuilder<ExchSetups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExchSetups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExchSetups` by taking the entity as a parameter.
   */
  delete(entity: ExchSetups<T>): DeleteRequestBuilder<ExchSetups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    exchangeCode?: string
  ): DeleteRequestBuilder<ExchSetups<T>, T> {
    return new DeleteRequestBuilder<ExchSetups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ExchSetups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ExchangeCode: exchangeCode!
          }
    );
  }
}
