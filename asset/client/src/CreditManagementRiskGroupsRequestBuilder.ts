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
import { CreditManagementRiskGroups } from './CreditManagementRiskGroups';

/**
 * Request builder class for operations supported on the {@link CreditManagementRiskGroups} entity.
 */
export class CreditManagementRiskGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CreditManagementRiskGroups<T>, T> {
  /**
   * Returns a request builder for querying all `CreditManagementRiskGroups` entities.
   * @returns A request builder for creating requests to retrieve all `CreditManagementRiskGroups` entities.
   */
  getAll(): GetAllRequestBuilder<CreditManagementRiskGroups<T>, T> {
    return new GetAllRequestBuilder<CreditManagementRiskGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CreditManagementRiskGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CreditManagementRiskGroups`.
   */
  create(
    entity: CreditManagementRiskGroups<T>
  ): CreateRequestBuilder<CreditManagementRiskGroups<T>, T> {
    return new CreateRequestBuilder<CreditManagementRiskGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CreditManagementRiskGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link CreditManagementRiskGroups.dataAreaId}.
   * @param riskGroupId Key property. See {@link CreditManagementRiskGroups.riskGroupId}.
   * @returns A request builder for creating requests to retrieve one `CreditManagementRiskGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    riskGroupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CreditManagementRiskGroups<T>, T> {
    return new GetByKeyRequestBuilder<CreditManagementRiskGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RiskGroupId: riskGroupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CreditManagementRiskGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CreditManagementRiskGroups`.
   */
  update(
    entity: CreditManagementRiskGroups<T>
  ): UpdateRequestBuilder<CreditManagementRiskGroups<T>, T> {
    return new UpdateRequestBuilder<CreditManagementRiskGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CreditManagementRiskGroups`.
   * @param dataAreaId Key property. See {@link CreditManagementRiskGroups.dataAreaId}.
   * @param riskGroupId Key property. See {@link CreditManagementRiskGroups.riskGroupId}.
   * @returns A request builder for creating requests that delete an entity of type `CreditManagementRiskGroups`.
   */
  delete(
    dataAreaId: string,
    riskGroupId: string
  ): DeleteRequestBuilder<CreditManagementRiskGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CreditManagementRiskGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CreditManagementRiskGroups` by taking the entity as a parameter.
   */
  delete(
    entity: CreditManagementRiskGroups<T>
  ): DeleteRequestBuilder<CreditManagementRiskGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    riskGroupId?: string
  ): DeleteRequestBuilder<CreditManagementRiskGroups<T>, T> {
    return new DeleteRequestBuilder<CreditManagementRiskGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CreditManagementRiskGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RiskGroupId: riskGroupId!
          }
    );
  }
}
