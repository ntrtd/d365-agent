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
import { MainAccountLegalEntities } from './MainAccountLegalEntities';

/**
 * Request builder class for operations supported on the {@link MainAccountLegalEntities} entity.
 */
export class MainAccountLegalEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MainAccountLegalEntities<T>, T> {
  /**
   * Returns a request builder for querying all `MainAccountLegalEntities` entities.
   * @returns A request builder for creating requests to retrieve all `MainAccountLegalEntities` entities.
   */
  getAll(): GetAllRequestBuilder<MainAccountLegalEntities<T>, T> {
    return new GetAllRequestBuilder<MainAccountLegalEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MainAccountLegalEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MainAccountLegalEntities`.
   */
  create(
    entity: MainAccountLegalEntities<T>
  ): CreateRequestBuilder<MainAccountLegalEntities<T>, T> {
    return new CreateRequestBuilder<MainAccountLegalEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MainAccountLegalEntities` entity based on its keys.
   * @param mainAccountId Key property. See {@link MainAccountLegalEntities.mainAccountId}.
   * @param chartOfAccounts Key property. See {@link MainAccountLegalEntities.chartOfAccounts}.
   * @param legalEntityId Key property. See {@link MainAccountLegalEntities.legalEntityId}.
   * @returns A request builder for creating requests to retrieve one `MainAccountLegalEntities` entity based on its keys.
   */
  getByKey(
    mainAccountId: DeserializedType<T, 'Edm.String'>,
    chartOfAccounts: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MainAccountLegalEntities<T>, T> {
    return new GetByKeyRequestBuilder<MainAccountLegalEntities<T>, T>(
      this.entityApi,
      {
        MainAccountId: mainAccountId,
        ChartOfAccounts: chartOfAccounts,
        LegalEntityId: legalEntityId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MainAccountLegalEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MainAccountLegalEntities`.
   */
  update(
    entity: MainAccountLegalEntities<T>
  ): UpdateRequestBuilder<MainAccountLegalEntities<T>, T> {
    return new UpdateRequestBuilder<MainAccountLegalEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MainAccountLegalEntities`.
   * @param mainAccountId Key property. See {@link MainAccountLegalEntities.mainAccountId}.
   * @param chartOfAccounts Key property. See {@link MainAccountLegalEntities.chartOfAccounts}.
   * @param legalEntityId Key property. See {@link MainAccountLegalEntities.legalEntityId}.
   * @returns A request builder for creating requests that delete an entity of type `MainAccountLegalEntities`.
   */
  delete(
    mainAccountId: string,
    chartOfAccounts: string,
    legalEntityId: string
  ): DeleteRequestBuilder<MainAccountLegalEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MainAccountLegalEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MainAccountLegalEntities` by taking the entity as a parameter.
   */
  delete(
    entity: MainAccountLegalEntities<T>
  ): DeleteRequestBuilder<MainAccountLegalEntities<T>, T>;
  delete(
    mainAccountIdOrEntity: any,
    chartOfAccounts?: string,
    legalEntityId?: string
  ): DeleteRequestBuilder<MainAccountLegalEntities<T>, T> {
    return new DeleteRequestBuilder<MainAccountLegalEntities<T>, T>(
      this.entityApi,
      mainAccountIdOrEntity instanceof MainAccountLegalEntities
        ? mainAccountIdOrEntity
        : {
            MainAccountId: mainAccountIdOrEntity!,
            ChartOfAccounts: chartOfAccounts!,
            LegalEntityId: legalEntityId!
          }
    );
  }
}
