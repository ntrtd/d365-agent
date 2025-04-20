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
import { ExternalLinks } from './ExternalLinks';

/**
 * Request builder class for operations supported on the {@link ExternalLinks} entity.
 */
export class ExternalLinksRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExternalLinks<T>, T> {
  /**
   * Returns a request builder for querying all `ExternalLinks` entities.
   * @returns A request builder for creating requests to retrieve all `ExternalLinks` entities.
   */
  getAll(): GetAllRequestBuilder<ExternalLinks<T>, T> {
    return new GetAllRequestBuilder<ExternalLinks<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ExternalLinks` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExternalLinks`.
   */
  create(entity: ExternalLinks<T>): CreateRequestBuilder<ExternalLinks<T>, T> {
    return new CreateRequestBuilder<ExternalLinks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExternalLinks` entity based on its keys.
   * @param dataAreaId Key property. See {@link ExternalLinks.dataAreaId}.
   * @param displayText Key property. See {@link ExternalLinks.displayText}.
   * @param groupName Key property. See {@link ExternalLinks.groupName}.
   * @returns A request builder for creating requests to retrieve one `ExternalLinks` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    displayText: DeserializedType<T, 'Edm.String'>,
    groupName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ExternalLinks<T>, T> {
    return new GetByKeyRequestBuilder<ExternalLinks<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      DisplayText: displayText,
      GroupName: groupName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ExternalLinks`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExternalLinks`.
   */
  update(entity: ExternalLinks<T>): UpdateRequestBuilder<ExternalLinks<T>, T> {
    return new UpdateRequestBuilder<ExternalLinks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExternalLinks`.
   * @param dataAreaId Key property. See {@link ExternalLinks.dataAreaId}.
   * @param displayText Key property. See {@link ExternalLinks.displayText}.
   * @param groupName Key property. See {@link ExternalLinks.groupName}.
   * @returns A request builder for creating requests that delete an entity of type `ExternalLinks`.
   */
  delete(
    dataAreaId: string,
    displayText: string,
    groupName: string
  ): DeleteRequestBuilder<ExternalLinks<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExternalLinks`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExternalLinks` by taking the entity as a parameter.
   */
  delete(entity: ExternalLinks<T>): DeleteRequestBuilder<ExternalLinks<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    displayText?: string,
    groupName?: string
  ): DeleteRequestBuilder<ExternalLinks<T>, T> {
    return new DeleteRequestBuilder<ExternalLinks<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ExternalLinks
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DisplayText: displayText!,
            GroupName: groupName!
          }
    );
  }
}
