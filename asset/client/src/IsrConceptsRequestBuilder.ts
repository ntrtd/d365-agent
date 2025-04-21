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
import { IsrConcepts } from './IsrConcepts';
import { IsrConceptCategoryMx } from './IsrConceptCategoryMx';

/**
 * Request builder class for operations supported on the {@link IsrConcepts} entity.
 */
export class IsrConceptsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<IsrConcepts<T>, T> {
  /**
   * Returns a request builder for querying all `IsrConcepts` entities.
   * @returns A request builder for creating requests to retrieve all `IsrConcepts` entities.
   */
  getAll(): GetAllRequestBuilder<IsrConcepts<T>, T> {
    return new GetAllRequestBuilder<IsrConcepts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `IsrConcepts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `IsrConcepts`.
   */
  create(entity: IsrConcepts<T>): CreateRequestBuilder<IsrConcepts<T>, T> {
    return new CreateRequestBuilder<IsrConcepts<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `IsrConcepts` entity based on its keys.
   * @param dataAreaId Key property. See {@link IsrConcepts.dataAreaId}.
   * @param conceptId Key property. See {@link IsrConcepts.conceptId}.
   * @param mainAccountId Key property. See {@link IsrConcepts.mainAccountId}.
   * @param chartOfAccountsName Key property. See {@link IsrConcepts.chartOfAccountsName}.
   * @returns A request builder for creating requests to retrieve one `IsrConcepts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    conceptId: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.ISRConceptCategory_MX'
    >,
    mainAccountId: DeserializedType<T, 'Edm.String'>,
    chartOfAccountsName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<IsrConcepts<T>, T> {
    return new GetByKeyRequestBuilder<IsrConcepts<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ConceptId: conceptId,
      MainAccountId: mainAccountId,
      ChartOfAccountsName: chartOfAccountsName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `IsrConcepts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `IsrConcepts`.
   */
  update(entity: IsrConcepts<T>): UpdateRequestBuilder<IsrConcepts<T>, T> {
    return new UpdateRequestBuilder<IsrConcepts<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `IsrConcepts`.
   * @param dataAreaId Key property. See {@link IsrConcepts.dataAreaId}.
   * @param conceptId Key property. See {@link IsrConcepts.conceptId}.
   * @param mainAccountId Key property. See {@link IsrConcepts.mainAccountId}.
   * @param chartOfAccountsName Key property. See {@link IsrConcepts.chartOfAccountsName}.
   * @returns A request builder for creating requests that delete an entity of type `IsrConcepts`.
   */
  delete(
    dataAreaId: string,
    conceptId: IsrConceptCategoryMx,
    mainAccountId: string,
    chartOfAccountsName: string
  ): DeleteRequestBuilder<IsrConcepts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `IsrConcepts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `IsrConcepts` by taking the entity as a parameter.
   */
  delete(entity: IsrConcepts<T>): DeleteRequestBuilder<IsrConcepts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    conceptId?: IsrConceptCategoryMx,
    mainAccountId?: string,
    chartOfAccountsName?: string
  ): DeleteRequestBuilder<IsrConcepts<T>, T> {
    return new DeleteRequestBuilder<IsrConcepts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof IsrConcepts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ConceptId: conceptId!,
            MainAccountId: mainAccountId!,
            ChartOfAccountsName: chartOfAccountsName!
          }
    );
  }
}
