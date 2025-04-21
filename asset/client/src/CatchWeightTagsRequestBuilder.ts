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
import { CatchWeightTags } from './CatchWeightTags';

/**
 * Request builder class for operations supported on the {@link CatchWeightTags} entity.
 */
export class CatchWeightTagsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CatchWeightTags<T>, T> {
  /**
   * Returns a request builder for querying all `CatchWeightTags` entities.
   * @returns A request builder for creating requests to retrieve all `CatchWeightTags` entities.
   */
  getAll(): GetAllRequestBuilder<CatchWeightTags<T>, T> {
    return new GetAllRequestBuilder<CatchWeightTags<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CatchWeightTags` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CatchWeightTags`.
   */
  create(
    entity: CatchWeightTags<T>
  ): CreateRequestBuilder<CatchWeightTags<T>, T> {
    return new CreateRequestBuilder<CatchWeightTags<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CatchWeightTags` entity based on its keys.
   * @param dataAreaId Key property. See {@link CatchWeightTags.dataAreaId}.
   * @param tagNumber Key property. See {@link CatchWeightTags.tagNumber}.
   * @returns A request builder for creating requests to retrieve one `CatchWeightTags` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    tagNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CatchWeightTags<T>, T> {
    return new GetByKeyRequestBuilder<CatchWeightTags<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      TagNumber: tagNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CatchWeightTags`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CatchWeightTags`.
   */
  update(
    entity: CatchWeightTags<T>
  ): UpdateRequestBuilder<CatchWeightTags<T>, T> {
    return new UpdateRequestBuilder<CatchWeightTags<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CatchWeightTags`.
   * @param dataAreaId Key property. See {@link CatchWeightTags.dataAreaId}.
   * @param tagNumber Key property. See {@link CatchWeightTags.tagNumber}.
   * @returns A request builder for creating requests that delete an entity of type `CatchWeightTags`.
   */
  delete(
    dataAreaId: string,
    tagNumber: string
  ): DeleteRequestBuilder<CatchWeightTags<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CatchWeightTags`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CatchWeightTags` by taking the entity as a parameter.
   */
  delete(
    entity: CatchWeightTags<T>
  ): DeleteRequestBuilder<CatchWeightTags<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    tagNumber?: string
  ): DeleteRequestBuilder<CatchWeightTags<T>, T> {
    return new DeleteRequestBuilder<CatchWeightTags<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CatchWeightTags
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TagNumber: tagNumber!
          }
    );
  }
}
