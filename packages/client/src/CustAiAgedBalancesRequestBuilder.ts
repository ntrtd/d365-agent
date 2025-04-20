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
import { CustAiAgedBalances } from './CustAiAgedBalances';

/**
 * Request builder class for operations supported on the {@link CustAiAgedBalances} entity.
 */
export class CustAiAgedBalancesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustAiAgedBalances<T>, T> {
  /**
   * Returns a request builder for querying all `CustAiAgedBalances` entities.
   * @returns A request builder for creating requests to retrieve all `CustAiAgedBalances` entities.
   */
  getAll(): GetAllRequestBuilder<CustAiAgedBalances<T>, T> {
    return new GetAllRequestBuilder<CustAiAgedBalances<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CustAiAgedBalances` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustAiAgedBalances`.
   */
  create(
    entity: CustAiAgedBalances<T>
  ): CreateRequestBuilder<CustAiAgedBalances<T>, T> {
    return new CreateRequestBuilder<CustAiAgedBalances<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustAiAgedBalances` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustAiAgedBalances.dataAreaId}.
   * @param custAccount Key property. See {@link CustAiAgedBalances.custAccount}.
   * @param agingPeriodDefinition Key property. See {@link CustAiAgedBalances.agingPeriodDefinition}.
   * @returns A request builder for creating requests to retrieve one `CustAiAgedBalances` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    custAccount: DeserializedType<T, 'Edm.String'>,
    agingPeriodDefinition: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustAiAgedBalances<T>, T> {
    return new GetByKeyRequestBuilder<CustAiAgedBalances<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CustAccount: custAccount,
        AgingPeriodDefinition: agingPeriodDefinition
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustAiAgedBalances`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustAiAgedBalances`.
   */
  update(
    entity: CustAiAgedBalances<T>
  ): UpdateRequestBuilder<CustAiAgedBalances<T>, T> {
    return new UpdateRequestBuilder<CustAiAgedBalances<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustAiAgedBalances`.
   * @param dataAreaId Key property. See {@link CustAiAgedBalances.dataAreaId}.
   * @param custAccount Key property. See {@link CustAiAgedBalances.custAccount}.
   * @param agingPeriodDefinition Key property. See {@link CustAiAgedBalances.agingPeriodDefinition}.
   * @returns A request builder for creating requests that delete an entity of type `CustAiAgedBalances`.
   */
  delete(
    dataAreaId: string,
    custAccount: string,
    agingPeriodDefinition: string
  ): DeleteRequestBuilder<CustAiAgedBalances<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustAiAgedBalances`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustAiAgedBalances` by taking the entity as a parameter.
   */
  delete(
    entity: CustAiAgedBalances<T>
  ): DeleteRequestBuilder<CustAiAgedBalances<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    custAccount?: string,
    agingPeriodDefinition?: string
  ): DeleteRequestBuilder<CustAiAgedBalances<T>, T> {
    return new DeleteRequestBuilder<CustAiAgedBalances<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustAiAgedBalances
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CustAccount: custAccount!,
            AgingPeriodDefinition: agingPeriodDefinition!
          }
    );
  }
}
