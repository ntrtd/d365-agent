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
import { RecSetupBases } from './RecSetupBases';

/**
 * Request builder class for operations supported on the {@link RecSetupBases} entity.
 */
export class RecSetupBasesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RecSetupBases<T>, T> {
  /**
   * Returns a request builder for querying all `RecSetupBases` entities.
   * @returns A request builder for creating requests to retrieve all `RecSetupBases` entities.
   */
  getAll(): GetAllRequestBuilder<RecSetupBases<T>, T> {
    return new GetAllRequestBuilder<RecSetupBases<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RecSetupBases` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RecSetupBases`.
   */
  create(entity: RecSetupBases<T>): CreateRequestBuilder<RecSetupBases<T>, T> {
    return new CreateRequestBuilder<RecSetupBases<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RecSetupBases` entity based on its keys.
   * @param dataAreaId Key property. See {@link RecSetupBases.dataAreaId}.
   * @param itemId Key property. See {@link RecSetupBases.itemId}.
   * @param itemGroup Key property. See {@link RecSetupBases.itemGroup}.
   * @returns A request builder for creating requests to retrieve one `RecSetupBases` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemId: DeserializedType<T, 'Edm.String'>,
    itemGroup: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RecSetupBases<T>, T> {
    return new GetByKeyRequestBuilder<RecSetupBases<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ItemId: itemId,
      ItemGroup: itemGroup
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RecSetupBases`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RecSetupBases`.
   */
  update(entity: RecSetupBases<T>): UpdateRequestBuilder<RecSetupBases<T>, T> {
    return new UpdateRequestBuilder<RecSetupBases<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RecSetupBases`.
   * @param dataAreaId Key property. See {@link RecSetupBases.dataAreaId}.
   * @param itemId Key property. See {@link RecSetupBases.itemId}.
   * @param itemGroup Key property. See {@link RecSetupBases.itemGroup}.
   * @returns A request builder for creating requests that delete an entity of type `RecSetupBases`.
   */
  delete(
    dataAreaId: string,
    itemId: string,
    itemGroup: string
  ): DeleteRequestBuilder<RecSetupBases<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RecSetupBases`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RecSetupBases` by taking the entity as a parameter.
   */
  delete(entity: RecSetupBases<T>): DeleteRequestBuilder<RecSetupBases<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemId?: string,
    itemGroup?: string
  ): DeleteRequestBuilder<RecSetupBases<T>, T> {
    return new DeleteRequestBuilder<RecSetupBases<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RecSetupBases
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemId: itemId!,
            ItemGroup: itemGroup!
          }
    );
  }
}
