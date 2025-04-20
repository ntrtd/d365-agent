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
import { Tests } from './Tests';

/**
 * Request builder class for operations supported on the {@link Tests} entity.
 */
export class TestsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Tests<T>, T> {
  /**
   * Returns a request builder for querying all `Tests` entities.
   * @returns A request builder for creating requests to retrieve all `Tests` entities.
   */
  getAll(): GetAllRequestBuilder<Tests<T>, T> {
    return new GetAllRequestBuilder<Tests<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Tests` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Tests`.
   */
  create(entity: Tests<T>): CreateRequestBuilder<Tests<T>, T> {
    return new CreateRequestBuilder<Tests<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Tests` entity based on its keys.
   * @param dataAreaId Key property. See {@link Tests.dataAreaId}.
   * @param id Key property. See {@link Tests.id}.
   * @returns A request builder for creating requests to retrieve one `Tests` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    id: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<Tests<T>, T> {
    return new GetByKeyRequestBuilder<Tests<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ID: id
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Tests`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Tests`.
   */
  update(entity: Tests<T>): UpdateRequestBuilder<Tests<T>, T> {
    return new UpdateRequestBuilder<Tests<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Tests`.
   * @param dataAreaId Key property. See {@link Tests.dataAreaId}.
   * @param id Key property. See {@link Tests.id}.
   * @returns A request builder for creating requests that delete an entity of type `Tests`.
   */
  delete(dataAreaId: string, id: BigNumber): DeleteRequestBuilder<Tests<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Tests`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Tests` by taking the entity as a parameter.
   */
  delete(entity: Tests<T>): DeleteRequestBuilder<Tests<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    id?: BigNumber
  ): DeleteRequestBuilder<Tests<T>, T> {
    return new DeleteRequestBuilder<Tests<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof Tests
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ID: id!
          }
    );
  }
}
