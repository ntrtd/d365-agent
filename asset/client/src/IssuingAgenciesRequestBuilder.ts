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
import { IssuingAgencies } from './IssuingAgencies';

/**
 * Request builder class for operations supported on the {@link IssuingAgencies} entity.
 */
export class IssuingAgenciesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<IssuingAgencies<T>, T> {
  /**
   * Returns a request builder for querying all `IssuingAgencies` entities.
   * @returns A request builder for creating requests to retrieve all `IssuingAgencies` entities.
   */
  getAll(): GetAllRequestBuilder<IssuingAgencies<T>, T> {
    return new GetAllRequestBuilder<IssuingAgencies<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `IssuingAgencies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `IssuingAgencies`.
   */
  create(
    entity: IssuingAgencies<T>
  ): CreateRequestBuilder<IssuingAgencies<T>, T> {
    return new CreateRequestBuilder<IssuingAgencies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `IssuingAgencies` entity based on its keys.
   * @param issuingAgency Key property. See {@link IssuingAgencies.issuingAgency}.
   * @returns A request builder for creating requests to retrieve one `IssuingAgencies` entity based on its keys.
   */
  getByKey(
    issuingAgency: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<IssuingAgencies<T>, T> {
    return new GetByKeyRequestBuilder<IssuingAgencies<T>, T>(this.entityApi, {
      IssuingAgency: issuingAgency
    });
  }

  /**
   * Returns a request builder for updating an entity of type `IssuingAgencies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `IssuingAgencies`.
   */
  update(
    entity: IssuingAgencies<T>
  ): UpdateRequestBuilder<IssuingAgencies<T>, T> {
    return new UpdateRequestBuilder<IssuingAgencies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `IssuingAgencies`.
   * @param issuingAgency Key property. See {@link IssuingAgencies.issuingAgency}.
   * @returns A request builder for creating requests that delete an entity of type `IssuingAgencies`.
   */
  delete(issuingAgency: string): DeleteRequestBuilder<IssuingAgencies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `IssuingAgencies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `IssuingAgencies` by taking the entity as a parameter.
   */
  delete(
    entity: IssuingAgencies<T>
  ): DeleteRequestBuilder<IssuingAgencies<T>, T>;
  delete(
    issuingAgencyOrEntity: any
  ): DeleteRequestBuilder<IssuingAgencies<T>, T> {
    return new DeleteRequestBuilder<IssuingAgencies<T>, T>(
      this.entityApi,
      issuingAgencyOrEntity instanceof IssuingAgencies
        ? issuingAgencyOrEntity
        : { IssuingAgency: issuingAgencyOrEntity! }
    );
  }
}
