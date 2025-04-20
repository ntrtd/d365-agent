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
import { FiscalIntegrationFunctionalityProfiles } from './FiscalIntegrationFunctionalityProfiles';

/**
 * Request builder class for operations supported on the {@link FiscalIntegrationFunctionalityProfiles} entity.
 */
export class FiscalIntegrationFunctionalityProfilesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FiscalIntegrationFunctionalityProfiles<T>, T> {
  /**
   * Returns a request builder for querying all `FiscalIntegrationFunctionalityProfiles` entities.
   * @returns A request builder for creating requests to retrieve all `FiscalIntegrationFunctionalityProfiles` entities.
   */
  getAll(): GetAllRequestBuilder<FiscalIntegrationFunctionalityProfiles<T>, T> {
    return new GetAllRequestBuilder<
      FiscalIntegrationFunctionalityProfiles<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FiscalIntegrationFunctionalityProfiles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FiscalIntegrationFunctionalityProfiles`.
   */
  create(
    entity: FiscalIntegrationFunctionalityProfiles<T>
  ): CreateRequestBuilder<FiscalIntegrationFunctionalityProfiles<T>, T> {
    return new CreateRequestBuilder<
      FiscalIntegrationFunctionalityProfiles<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `FiscalIntegrationFunctionalityProfiles` entity based on its keys.
   * @param dataAreaId Key property. See {@link FiscalIntegrationFunctionalityProfiles.dataAreaId}.
   * @param profileNumber Key property. See {@link FiscalIntegrationFunctionalityProfiles.profileNumber}.
   * @returns A request builder for creating requests to retrieve one `FiscalIntegrationFunctionalityProfiles` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    profileNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FiscalIntegrationFunctionalityProfiles<T>, T> {
    return new GetByKeyRequestBuilder<
      FiscalIntegrationFunctionalityProfiles<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ProfileNumber: profileNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `FiscalIntegrationFunctionalityProfiles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FiscalIntegrationFunctionalityProfiles`.
   */
  update(
    entity: FiscalIntegrationFunctionalityProfiles<T>
  ): UpdateRequestBuilder<FiscalIntegrationFunctionalityProfiles<T>, T> {
    return new UpdateRequestBuilder<
      FiscalIntegrationFunctionalityProfiles<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `FiscalIntegrationFunctionalityProfiles`.
   * @param dataAreaId Key property. See {@link FiscalIntegrationFunctionalityProfiles.dataAreaId}.
   * @param profileNumber Key property. See {@link FiscalIntegrationFunctionalityProfiles.profileNumber}.
   * @returns A request builder for creating requests that delete an entity of type `FiscalIntegrationFunctionalityProfiles`.
   */
  delete(
    dataAreaId: string,
    profileNumber: string
  ): DeleteRequestBuilder<FiscalIntegrationFunctionalityProfiles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FiscalIntegrationFunctionalityProfiles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FiscalIntegrationFunctionalityProfiles` by taking the entity as a parameter.
   */
  delete(
    entity: FiscalIntegrationFunctionalityProfiles<T>
  ): DeleteRequestBuilder<FiscalIntegrationFunctionalityProfiles<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    profileNumber?: string
  ): DeleteRequestBuilder<FiscalIntegrationFunctionalityProfiles<T>, T> {
    return new DeleteRequestBuilder<
      FiscalIntegrationFunctionalityProfiles<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof FiscalIntegrationFunctionalityProfiles
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProfileNumber: profileNumber!
          }
    );
  }
}
