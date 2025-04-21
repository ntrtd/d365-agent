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
import { CaseCategoryTypeSecurities } from './CaseCategoryTypeSecurities';
import { CaseCategoryType } from './CaseCategoryType';

/**
 * Request builder class for operations supported on the {@link CaseCategoryTypeSecurities} entity.
 */
export class CaseCategoryTypeSecuritiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CaseCategoryTypeSecurities<T>, T> {
  /**
   * Returns a request builder for querying all `CaseCategoryTypeSecurities` entities.
   * @returns A request builder for creating requests to retrieve all `CaseCategoryTypeSecurities` entities.
   */
  getAll(): GetAllRequestBuilder<CaseCategoryTypeSecurities<T>, T> {
    return new GetAllRequestBuilder<CaseCategoryTypeSecurities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CaseCategoryTypeSecurities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CaseCategoryTypeSecurities`.
   */
  create(
    entity: CaseCategoryTypeSecurities<T>
  ): CreateRequestBuilder<CaseCategoryTypeSecurities<T>, T> {
    return new CreateRequestBuilder<CaseCategoryTypeSecurities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CaseCategoryTypeSecurities` entity based on its keys.
   * @param dataAreaId Key property. See {@link CaseCategoryTypeSecurities.dataAreaId}.
   * @param securityRole Key property. See {@link CaseCategoryTypeSecurities.securityRole}.
   * @param caseCategoryType Key property. See {@link CaseCategoryTypeSecurities.caseCategoryType}.
   * @returns A request builder for creating requests to retrieve one `CaseCategoryTypeSecurities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    securityRole: DeserializedType<T, 'Edm.String'>,
    caseCategoryType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.CaseCategoryType'
    >
  ): GetByKeyRequestBuilder<CaseCategoryTypeSecurities<T>, T> {
    return new GetByKeyRequestBuilder<CaseCategoryTypeSecurities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SecurityRole: securityRole,
        CaseCategoryType: caseCategoryType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CaseCategoryTypeSecurities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CaseCategoryTypeSecurities`.
   */
  update(
    entity: CaseCategoryTypeSecurities<T>
  ): UpdateRequestBuilder<CaseCategoryTypeSecurities<T>, T> {
    return new UpdateRequestBuilder<CaseCategoryTypeSecurities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CaseCategoryTypeSecurities`.
   * @param dataAreaId Key property. See {@link CaseCategoryTypeSecurities.dataAreaId}.
   * @param securityRole Key property. See {@link CaseCategoryTypeSecurities.securityRole}.
   * @param caseCategoryType Key property. See {@link CaseCategoryTypeSecurities.caseCategoryType}.
   * @returns A request builder for creating requests that delete an entity of type `CaseCategoryTypeSecurities`.
   */
  delete(
    dataAreaId: string,
    securityRole: string,
    caseCategoryType: CaseCategoryType
  ): DeleteRequestBuilder<CaseCategoryTypeSecurities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CaseCategoryTypeSecurities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CaseCategoryTypeSecurities` by taking the entity as a parameter.
   */
  delete(
    entity: CaseCategoryTypeSecurities<T>
  ): DeleteRequestBuilder<CaseCategoryTypeSecurities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    securityRole?: string,
    caseCategoryType?: CaseCategoryType
  ): DeleteRequestBuilder<CaseCategoryTypeSecurities<T>, T> {
    return new DeleteRequestBuilder<CaseCategoryTypeSecurities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CaseCategoryTypeSecurities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SecurityRole: securityRole!,
            CaseCategoryType: caseCategoryType!
          }
    );
  }
}
