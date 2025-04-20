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
import { SysMonDatas } from './SysMonDatas';

/**
 * Request builder class for operations supported on the {@link SysMonDatas} entity.
 */
export class SysMonDatasRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SysMonDatas<T>, T> {
  /**
   * Returns a request builder for querying all `SysMonDatas` entities.
   * @returns A request builder for creating requests to retrieve all `SysMonDatas` entities.
   */
  getAll(): GetAllRequestBuilder<SysMonDatas<T>, T> {
    return new GetAllRequestBuilder<SysMonDatas<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SysMonDatas` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SysMonDatas`.
   */
  create(entity: SysMonDatas<T>): CreateRequestBuilder<SysMonDatas<T>, T> {
    return new CreateRequestBuilder<SysMonDatas<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `SysMonDatas` entity based on its keys.
   * @param description Key property. See {@link SysMonDatas.description}.
   * @returns A request builder for creating requests to retrieve one `SysMonDatas` entity based on its keys.
   */
  getByKey(
    description: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SysMonDatas<T>, T> {
    return new GetByKeyRequestBuilder<SysMonDatas<T>, T>(this.entityApi, {
      Description: description
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SysMonDatas`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SysMonDatas`.
   */
  update(entity: SysMonDatas<T>): UpdateRequestBuilder<SysMonDatas<T>, T> {
    return new UpdateRequestBuilder<SysMonDatas<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SysMonDatas`.
   * @param description Key property. See {@link SysMonDatas.description}.
   * @returns A request builder for creating requests that delete an entity of type `SysMonDatas`.
   */
  delete(description: string): DeleteRequestBuilder<SysMonDatas<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SysMonDatas`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SysMonDatas` by taking the entity as a parameter.
   */
  delete(entity: SysMonDatas<T>): DeleteRequestBuilder<SysMonDatas<T>, T>;
  delete(descriptionOrEntity: any): DeleteRequestBuilder<SysMonDatas<T>, T> {
    return new DeleteRequestBuilder<SysMonDatas<T>, T>(
      this.entityApi,
      descriptionOrEntity instanceof SysMonDatas
        ? descriptionOrEntity
        : { Description: descriptionOrEntity! }
    );
  }
}
