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
import { CostConfigurationPriceListCostingVersions } from './CostConfigurationPriceListCostingVersions';

/**
 * Request builder class for operations supported on the {@link CostConfigurationPriceListCostingVersions} entity.
 */
export class CostConfigurationPriceListCostingVersionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CostConfigurationPriceListCostingVersions<T>, T> {
  /**
   * Returns a request builder for querying all `CostConfigurationPriceListCostingVersions` entities.
   * @returns A request builder for creating requests to retrieve all `CostConfigurationPriceListCostingVersions` entities.
   */
  getAll(): GetAllRequestBuilder<
    CostConfigurationPriceListCostingVersions<T>,
    T
  > {
    return new GetAllRequestBuilder<
      CostConfigurationPriceListCostingVersions<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CostConfigurationPriceListCostingVersions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostConfigurationPriceListCostingVersions`.
   */
  create(
    entity: CostConfigurationPriceListCostingVersions<T>
  ): CreateRequestBuilder<CostConfigurationPriceListCostingVersions<T>, T> {
    return new CreateRequestBuilder<
      CostConfigurationPriceListCostingVersions<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CostConfigurationPriceListCostingVersions` entity based on its keys.
   * @param versionId Key property. See {@link CostConfigurationPriceListCostingVersions.versionId}.
   * @param legalEntity Key property. See {@link CostConfigurationPriceListCostingVersions.legalEntity}.
   * @param costConfigurationPriceListName Key property. See {@link CostConfigurationPriceListCostingVersions.costConfigurationPriceListName}.
   * @returns A request builder for creating requests to retrieve one `CostConfigurationPriceListCostingVersions` entity based on its keys.
   */
  getByKey(
    versionId: DeserializedType<T, 'Edm.String'>,
    legalEntity: DeserializedType<T, 'Edm.String'>,
    costConfigurationPriceListName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CostConfigurationPriceListCostingVersions<T>, T> {
    return new GetByKeyRequestBuilder<
      CostConfigurationPriceListCostingVersions<T>,
      T
    >(this.entityApi, {
      VersionId: versionId,
      LegalEntity: legalEntity,
      CostConfigurationPriceListName: costConfigurationPriceListName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CostConfigurationPriceListCostingVersions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostConfigurationPriceListCostingVersions`.
   */
  update(
    entity: CostConfigurationPriceListCostingVersions<T>
  ): UpdateRequestBuilder<CostConfigurationPriceListCostingVersions<T>, T> {
    return new UpdateRequestBuilder<
      CostConfigurationPriceListCostingVersions<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CostConfigurationPriceListCostingVersions`.
   * @param versionId Key property. See {@link CostConfigurationPriceListCostingVersions.versionId}.
   * @param legalEntity Key property. See {@link CostConfigurationPriceListCostingVersions.legalEntity}.
   * @param costConfigurationPriceListName Key property. See {@link CostConfigurationPriceListCostingVersions.costConfigurationPriceListName}.
   * @returns A request builder for creating requests that delete an entity of type `CostConfigurationPriceListCostingVersions`.
   */
  delete(
    versionId: string,
    legalEntity: string,
    costConfigurationPriceListName: string
  ): DeleteRequestBuilder<CostConfigurationPriceListCostingVersions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CostConfigurationPriceListCostingVersions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostConfigurationPriceListCostingVersions` by taking the entity as a parameter.
   */
  delete(
    entity: CostConfigurationPriceListCostingVersions<T>
  ): DeleteRequestBuilder<CostConfigurationPriceListCostingVersions<T>, T>;
  delete(
    versionIdOrEntity: any,
    legalEntity?: string,
    costConfigurationPriceListName?: string
  ): DeleteRequestBuilder<CostConfigurationPriceListCostingVersions<T>, T> {
    return new DeleteRequestBuilder<
      CostConfigurationPriceListCostingVersions<T>,
      T
    >(
      this.entityApi,
      versionIdOrEntity instanceof CostConfigurationPriceListCostingVersions
        ? versionIdOrEntity
        : {
            VersionId: versionIdOrEntity!,
            LegalEntity: legalEntity!,
            CostConfigurationPriceListName: costConfigurationPriceListName!
          }
    );
  }
}
