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
import { MainAccountCompanies } from './MainAccountCompanies';

/**
 * Request builder class for operations supported on the {@link MainAccountCompanies} entity.
 */
export class MainAccountCompaniesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MainAccountCompanies<T>, T> {
  /**
   * Returns a request builder for querying all `MainAccountCompanies` entities.
   * @returns A request builder for creating requests to retrieve all `MainAccountCompanies` entities.
   */
  getAll(): GetAllRequestBuilder<MainAccountCompanies<T>, T> {
    return new GetAllRequestBuilder<MainAccountCompanies<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MainAccountCompanies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MainAccountCompanies`.
   */
  create(
    entity: MainAccountCompanies<T>
  ): CreateRequestBuilder<MainAccountCompanies<T>, T> {
    return new CreateRequestBuilder<MainAccountCompanies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MainAccountCompanies` entity based on its keys.
   * @param mainAccountId Key property. See {@link MainAccountCompanies.mainAccountId}.
   * @param legalEntityId Key property. See {@link MainAccountCompanies.legalEntityId}.
   * @returns A request builder for creating requests to retrieve one `MainAccountCompanies` entity based on its keys.
   */
  getByKey(
    mainAccountId: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MainAccountCompanies<T>, T> {
    return new GetByKeyRequestBuilder<MainAccountCompanies<T>, T>(
      this.entityApi,
      {
        MainAccountId: mainAccountId,
        LegalEntityId: legalEntityId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MainAccountCompanies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MainAccountCompanies`.
   */
  update(
    entity: MainAccountCompanies<T>
  ): UpdateRequestBuilder<MainAccountCompanies<T>, T> {
    return new UpdateRequestBuilder<MainAccountCompanies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MainAccountCompanies`.
   * @param mainAccountId Key property. See {@link MainAccountCompanies.mainAccountId}.
   * @param legalEntityId Key property. See {@link MainAccountCompanies.legalEntityId}.
   * @returns A request builder for creating requests that delete an entity of type `MainAccountCompanies`.
   */
  delete(
    mainAccountId: string,
    legalEntityId: string
  ): DeleteRequestBuilder<MainAccountCompanies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MainAccountCompanies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MainAccountCompanies` by taking the entity as a parameter.
   */
  delete(
    entity: MainAccountCompanies<T>
  ): DeleteRequestBuilder<MainAccountCompanies<T>, T>;
  delete(
    mainAccountIdOrEntity: any,
    legalEntityId?: string
  ): DeleteRequestBuilder<MainAccountCompanies<T>, T> {
    return new DeleteRequestBuilder<MainAccountCompanies<T>, T>(
      this.entityApi,
      mainAccountIdOrEntity instanceof MainAccountCompanies
        ? mainAccountIdOrEntity
        : {
            MainAccountId: mainAccountIdOrEntity!,
            LegalEntityId: legalEntityId!
          }
    );
  }
}
