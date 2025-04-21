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
import { CustAgedBalances } from './CustAgedBalances';

/**
 * Request builder class for operations supported on the {@link CustAgedBalances} entity.
 */
export class CustAgedBalancesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustAgedBalances<T>, T> {
  /**
   * Returns a request builder for querying all `CustAgedBalances` entities.
   * @returns A request builder for creating requests to retrieve all `CustAgedBalances` entities.
   */
  getAll(): GetAllRequestBuilder<CustAgedBalances<T>, T> {
    return new GetAllRequestBuilder<CustAgedBalances<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CustAgedBalances` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustAgedBalances`.
   */
  create(
    entity: CustAgedBalances<T>
  ): CreateRequestBuilder<CustAgedBalances<T>, T> {
    return new CreateRequestBuilder<CustAgedBalances<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustAgedBalances` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustAgedBalances.dataAreaId}.
   * @param agingPeriodDefinition Key property. See {@link CustAgedBalances.agingPeriodDefinition}.
   * @param custAccount Key property. See {@link CustAgedBalances.custAccount}.
   * @param company Key property. See {@link CustAgedBalances.company}.
   * @returns A request builder for creating requests to retrieve one `CustAgedBalances` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    agingPeriodDefinition: DeserializedType<T, 'Edm.String'>,
    custAccount: DeserializedType<T, 'Edm.String'>,
    company: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustAgedBalances<T>, T> {
    return new GetByKeyRequestBuilder<CustAgedBalances<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      AgingPeriodDefinition: agingPeriodDefinition,
      CustAccount: custAccount,
      Company: company
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CustAgedBalances`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustAgedBalances`.
   */
  update(
    entity: CustAgedBalances<T>
  ): UpdateRequestBuilder<CustAgedBalances<T>, T> {
    return new UpdateRequestBuilder<CustAgedBalances<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustAgedBalances`.
   * @param dataAreaId Key property. See {@link CustAgedBalances.dataAreaId}.
   * @param agingPeriodDefinition Key property. See {@link CustAgedBalances.agingPeriodDefinition}.
   * @param custAccount Key property. See {@link CustAgedBalances.custAccount}.
   * @param company Key property. See {@link CustAgedBalances.company}.
   * @returns A request builder for creating requests that delete an entity of type `CustAgedBalances`.
   */
  delete(
    dataAreaId: string,
    agingPeriodDefinition: string,
    custAccount: string,
    company: string
  ): DeleteRequestBuilder<CustAgedBalances<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustAgedBalances`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustAgedBalances` by taking the entity as a parameter.
   */
  delete(
    entity: CustAgedBalances<T>
  ): DeleteRequestBuilder<CustAgedBalances<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    agingPeriodDefinition?: string,
    custAccount?: string,
    company?: string
  ): DeleteRequestBuilder<CustAgedBalances<T>, T> {
    return new DeleteRequestBuilder<CustAgedBalances<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustAgedBalances
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AgingPeriodDefinition: agingPeriodDefinition!,
            CustAccount: custAccount!,
            Company: company!
          }
    );
  }
}
