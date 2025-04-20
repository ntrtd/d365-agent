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
import { InjurySeverityLevels } from './InjurySeverityLevels';

/**
 * Request builder class for operations supported on the {@link InjurySeverityLevels} entity.
 */
export class InjurySeverityLevelsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InjurySeverityLevels<T>, T> {
  /**
   * Returns a request builder for querying all `InjurySeverityLevels` entities.
   * @returns A request builder for creating requests to retrieve all `InjurySeverityLevels` entities.
   */
  getAll(): GetAllRequestBuilder<InjurySeverityLevels<T>, T> {
    return new GetAllRequestBuilder<InjurySeverityLevels<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InjurySeverityLevels` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InjurySeverityLevels`.
   */
  create(
    entity: InjurySeverityLevels<T>
  ): CreateRequestBuilder<InjurySeverityLevels<T>, T> {
    return new CreateRequestBuilder<InjurySeverityLevels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InjurySeverityLevels` entity based on its keys.
   * @param severityLevelId Key property. See {@link InjurySeverityLevels.severityLevelId}.
   * @returns A request builder for creating requests to retrieve one `InjurySeverityLevels` entity based on its keys.
   */
  getByKey(
    severityLevelId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InjurySeverityLevels<T>, T> {
    return new GetByKeyRequestBuilder<InjurySeverityLevels<T>, T>(
      this.entityApi,
      { SeverityLevelId: severityLevelId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InjurySeverityLevels`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InjurySeverityLevels`.
   */
  update(
    entity: InjurySeverityLevels<T>
  ): UpdateRequestBuilder<InjurySeverityLevels<T>, T> {
    return new UpdateRequestBuilder<InjurySeverityLevels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InjurySeverityLevels`.
   * @param severityLevelId Key property. See {@link InjurySeverityLevels.severityLevelId}.
   * @returns A request builder for creating requests that delete an entity of type `InjurySeverityLevels`.
   */
  delete(
    severityLevelId: string
  ): DeleteRequestBuilder<InjurySeverityLevels<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InjurySeverityLevels`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InjurySeverityLevels` by taking the entity as a parameter.
   */
  delete(
    entity: InjurySeverityLevels<T>
  ): DeleteRequestBuilder<InjurySeverityLevels<T>, T>;
  delete(
    severityLevelIdOrEntity: any
  ): DeleteRequestBuilder<InjurySeverityLevels<T>, T> {
    return new DeleteRequestBuilder<InjurySeverityLevels<T>, T>(
      this.entityApi,
      severityLevelIdOrEntity instanceof InjurySeverityLevels
        ? severityLevelIdOrEntity
        : { SeverityLevelId: severityLevelIdOrEntity! }
    );
  }
}
