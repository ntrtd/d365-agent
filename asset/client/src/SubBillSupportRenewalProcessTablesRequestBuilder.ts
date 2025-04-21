/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { SubBillSupportRenewalProcessTables } from './SubBillSupportRenewalProcessTables';

/**
 * Request builder class for operations supported on the {@link SubBillSupportRenewalProcessTables} entity.
 */
export class SubBillSupportRenewalProcessTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillSupportRenewalProcessTables<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillSupportRenewalProcessTables` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillSupportRenewalProcessTables` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillSupportRenewalProcessTables<T>, T> {
    return new GetAllRequestBuilder<SubBillSupportRenewalProcessTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SubBillSupportRenewalProcessTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillSupportRenewalProcessTables`.
   */
  create(
    entity: SubBillSupportRenewalProcessTables<T>
  ): CreateRequestBuilder<SubBillSupportRenewalProcessTables<T>, T> {
    return new CreateRequestBuilder<SubBillSupportRenewalProcessTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubBillSupportRenewalProcessTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillSupportRenewalProcessTables.dataAreaId}.
   * @param salesId Key property. See {@link SubBillSupportRenewalProcessTables.salesId}.
   * @param salesTableRecId Key property. See {@link SubBillSupportRenewalProcessTables.salesTableRecId}.
   * @returns A request builder for creating requests to retrieve one `SubBillSupportRenewalProcessTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesId: DeserializedType<T, 'Edm.String'>,
    salesTableRecId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<SubBillSupportRenewalProcessTables<T>, T> {
    return new GetByKeyRequestBuilder<SubBillSupportRenewalProcessTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SalesId: salesId,
        SalesTableRecId: salesTableRecId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillSupportRenewalProcessTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillSupportRenewalProcessTables`.
   */
  update(
    entity: SubBillSupportRenewalProcessTables<T>
  ): UpdateRequestBuilder<SubBillSupportRenewalProcessTables<T>, T> {
    return new UpdateRequestBuilder<SubBillSupportRenewalProcessTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillSupportRenewalProcessTables`.
   * @param dataAreaId Key property. See {@link SubBillSupportRenewalProcessTables.dataAreaId}.
   * @param salesId Key property. See {@link SubBillSupportRenewalProcessTables.salesId}.
   * @param salesTableRecId Key property. See {@link SubBillSupportRenewalProcessTables.salesTableRecId}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillSupportRenewalProcessTables`.
   */
  delete(
    dataAreaId: string,
    salesId: string,
    salesTableRecId: BigNumber
  ): DeleteRequestBuilder<SubBillSupportRenewalProcessTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillSupportRenewalProcessTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillSupportRenewalProcessTables` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillSupportRenewalProcessTables<T>
  ): DeleteRequestBuilder<SubBillSupportRenewalProcessTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesId?: string,
    salesTableRecId?: BigNumber
  ): DeleteRequestBuilder<SubBillSupportRenewalProcessTables<T>, T> {
    return new DeleteRequestBuilder<SubBillSupportRenewalProcessTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillSupportRenewalProcessTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesId: salesId!,
            SalesTableRecId: salesTableRecId!
          }
    );
  }
}
