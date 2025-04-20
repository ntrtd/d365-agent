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
import { InjuryBodyParts } from './InjuryBodyParts';

/**
 * Request builder class for operations supported on the {@link InjuryBodyParts} entity.
 */
export class InjuryBodyPartsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InjuryBodyParts<T>, T> {
  /**
   * Returns a request builder for querying all `InjuryBodyParts` entities.
   * @returns A request builder for creating requests to retrieve all `InjuryBodyParts` entities.
   */
  getAll(): GetAllRequestBuilder<InjuryBodyParts<T>, T> {
    return new GetAllRequestBuilder<InjuryBodyParts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InjuryBodyParts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InjuryBodyParts`.
   */
  create(
    entity: InjuryBodyParts<T>
  ): CreateRequestBuilder<InjuryBodyParts<T>, T> {
    return new CreateRequestBuilder<InjuryBodyParts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InjuryBodyParts` entity based on its keys.
   * @param bodyPartId Key property. See {@link InjuryBodyParts.bodyPartId}.
   * @returns A request builder for creating requests to retrieve one `InjuryBodyParts` entity based on its keys.
   */
  getByKey(
    bodyPartId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InjuryBodyParts<T>, T> {
    return new GetByKeyRequestBuilder<InjuryBodyParts<T>, T>(this.entityApi, {
      BodyPartId: bodyPartId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `InjuryBodyParts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InjuryBodyParts`.
   */
  update(
    entity: InjuryBodyParts<T>
  ): UpdateRequestBuilder<InjuryBodyParts<T>, T> {
    return new UpdateRequestBuilder<InjuryBodyParts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InjuryBodyParts`.
   * @param bodyPartId Key property. See {@link InjuryBodyParts.bodyPartId}.
   * @returns A request builder for creating requests that delete an entity of type `InjuryBodyParts`.
   */
  delete(bodyPartId: string): DeleteRequestBuilder<InjuryBodyParts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InjuryBodyParts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InjuryBodyParts` by taking the entity as a parameter.
   */
  delete(
    entity: InjuryBodyParts<T>
  ): DeleteRequestBuilder<InjuryBodyParts<T>, T>;
  delete(bodyPartIdOrEntity: any): DeleteRequestBuilder<InjuryBodyParts<T>, T> {
    return new DeleteRequestBuilder<InjuryBodyParts<T>, T>(
      this.entityApi,
      bodyPartIdOrEntity instanceof InjuryBodyParts
        ? bodyPartIdOrEntity
        : { BodyPartId: bodyPartIdOrEntity! }
    );
  }
}
