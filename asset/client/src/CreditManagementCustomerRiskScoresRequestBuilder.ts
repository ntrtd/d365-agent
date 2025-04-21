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
import { CreditManagementCustomerRiskScores } from './CreditManagementCustomerRiskScores';

/**
 * Request builder class for operations supported on the {@link CreditManagementCustomerRiskScores} entity.
 */
export class CreditManagementCustomerRiskScoresRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CreditManagementCustomerRiskScores<T>, T> {
  /**
   * Returns a request builder for querying all `CreditManagementCustomerRiskScores` entities.
   * @returns A request builder for creating requests to retrieve all `CreditManagementCustomerRiskScores` entities.
   */
  getAll(): GetAllRequestBuilder<CreditManagementCustomerRiskScores<T>, T> {
    return new GetAllRequestBuilder<CreditManagementCustomerRiskScores<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CreditManagementCustomerRiskScores` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CreditManagementCustomerRiskScores`.
   */
  create(
    entity: CreditManagementCustomerRiskScores<T>
  ): CreateRequestBuilder<CreditManagementCustomerRiskScores<T>, T> {
    return new CreateRequestBuilder<CreditManagementCustomerRiskScores<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CreditManagementCustomerRiskScores` entity based on its keys.
   * @param dataAreaId Key property. See {@link CreditManagementCustomerRiskScores.dataAreaId}.
   * @param custAccount Key property. See {@link CreditManagementCustomerRiskScores.custAccount}.
   * @param riskScoreGroupId Key property. See {@link CreditManagementCustomerRiskScores.riskScoreGroupId}.
   * @returns A request builder for creating requests to retrieve one `CreditManagementCustomerRiskScores` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    custAccount: DeserializedType<T, 'Edm.String'>,
    riskScoreGroupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CreditManagementCustomerRiskScores<T>, T> {
    return new GetByKeyRequestBuilder<CreditManagementCustomerRiskScores<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CustAccount: custAccount,
        RiskScoreGroupId: riskScoreGroupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CreditManagementCustomerRiskScores`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CreditManagementCustomerRiskScores`.
   */
  update(
    entity: CreditManagementCustomerRiskScores<T>
  ): UpdateRequestBuilder<CreditManagementCustomerRiskScores<T>, T> {
    return new UpdateRequestBuilder<CreditManagementCustomerRiskScores<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CreditManagementCustomerRiskScores`.
   * @param dataAreaId Key property. See {@link CreditManagementCustomerRiskScores.dataAreaId}.
   * @param custAccount Key property. See {@link CreditManagementCustomerRiskScores.custAccount}.
   * @param riskScoreGroupId Key property. See {@link CreditManagementCustomerRiskScores.riskScoreGroupId}.
   * @returns A request builder for creating requests that delete an entity of type `CreditManagementCustomerRiskScores`.
   */
  delete(
    dataAreaId: string,
    custAccount: string,
    riskScoreGroupId: string
  ): DeleteRequestBuilder<CreditManagementCustomerRiskScores<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CreditManagementCustomerRiskScores`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CreditManagementCustomerRiskScores` by taking the entity as a parameter.
   */
  delete(
    entity: CreditManagementCustomerRiskScores<T>
  ): DeleteRequestBuilder<CreditManagementCustomerRiskScores<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    custAccount?: string,
    riskScoreGroupId?: string
  ): DeleteRequestBuilder<CreditManagementCustomerRiskScores<T>, T> {
    return new DeleteRequestBuilder<CreditManagementCustomerRiskScores<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CreditManagementCustomerRiskScores
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CustAccount: custAccount!,
            RiskScoreGroupId: riskScoreGroupId!
          }
    );
  }
}
