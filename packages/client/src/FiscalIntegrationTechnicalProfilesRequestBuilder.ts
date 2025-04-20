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
import { FiscalIntegrationTechnicalProfiles } from './FiscalIntegrationTechnicalProfiles';

/**
 * Request builder class for operations supported on the {@link FiscalIntegrationTechnicalProfiles} entity.
 */
export class FiscalIntegrationTechnicalProfilesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FiscalIntegrationTechnicalProfiles<T>, T> {
  /**
   * Returns a request builder for querying all `FiscalIntegrationTechnicalProfiles` entities.
   * @returns A request builder for creating requests to retrieve all `FiscalIntegrationTechnicalProfiles` entities.
   */
  getAll(): GetAllRequestBuilder<FiscalIntegrationTechnicalProfiles<T>, T> {
    return new GetAllRequestBuilder<FiscalIntegrationTechnicalProfiles<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `FiscalIntegrationTechnicalProfiles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FiscalIntegrationTechnicalProfiles`.
   */
  create(
    entity: FiscalIntegrationTechnicalProfiles<T>
  ): CreateRequestBuilder<FiscalIntegrationTechnicalProfiles<T>, T> {
    return new CreateRequestBuilder<FiscalIntegrationTechnicalProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FiscalIntegrationTechnicalProfiles` entity based on its keys.
   * @param profileNumber Key property. See {@link FiscalIntegrationTechnicalProfiles.profileNumber}.
   * @returns A request builder for creating requests to retrieve one `FiscalIntegrationTechnicalProfiles` entity based on its keys.
   */
  getByKey(
    profileNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FiscalIntegrationTechnicalProfiles<T>, T> {
    return new GetByKeyRequestBuilder<FiscalIntegrationTechnicalProfiles<T>, T>(
      this.entityApi,
      { ProfileNumber: profileNumber }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FiscalIntegrationTechnicalProfiles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FiscalIntegrationTechnicalProfiles`.
   */
  update(
    entity: FiscalIntegrationTechnicalProfiles<T>
  ): UpdateRequestBuilder<FiscalIntegrationTechnicalProfiles<T>, T> {
    return new UpdateRequestBuilder<FiscalIntegrationTechnicalProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FiscalIntegrationTechnicalProfiles`.
   * @param profileNumber Key property. See {@link FiscalIntegrationTechnicalProfiles.profileNumber}.
   * @returns A request builder for creating requests that delete an entity of type `FiscalIntegrationTechnicalProfiles`.
   */
  delete(
    profileNumber: string
  ): DeleteRequestBuilder<FiscalIntegrationTechnicalProfiles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FiscalIntegrationTechnicalProfiles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FiscalIntegrationTechnicalProfiles` by taking the entity as a parameter.
   */
  delete(
    entity: FiscalIntegrationTechnicalProfiles<T>
  ): DeleteRequestBuilder<FiscalIntegrationTechnicalProfiles<T>, T>;
  delete(
    profileNumberOrEntity: any
  ): DeleteRequestBuilder<FiscalIntegrationTechnicalProfiles<T>, T> {
    return new DeleteRequestBuilder<FiscalIntegrationTechnicalProfiles<T>, T>(
      this.entityApi,
      profileNumberOrEntity instanceof FiscalIntegrationTechnicalProfiles
        ? profileNumberOrEntity
        : { ProfileNumber: profileNumberOrEntity! }
    );
  }
}
