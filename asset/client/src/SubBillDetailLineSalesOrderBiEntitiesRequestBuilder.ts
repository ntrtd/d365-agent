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
import { SubBillDetailLineSalesOrderBiEntities } from './SubBillDetailLineSalesOrderBiEntities';

/**
 * Request builder class for operations supported on the {@link SubBillDetailLineSalesOrderBiEntities} entity.
 */
export class SubBillDetailLineSalesOrderBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillDetailLineSalesOrderBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillDetailLineSalesOrderBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillDetailLineSalesOrderBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillDetailLineSalesOrderBiEntities<T>, T> {
    return new GetAllRequestBuilder<
      SubBillDetailLineSalesOrderBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SubBillDetailLineSalesOrderBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillDetailLineSalesOrderBiEntities`.
   */
  create(
    entity: SubBillDetailLineSalesOrderBiEntities<T>
  ): CreateRequestBuilder<SubBillDetailLineSalesOrderBiEntities<T>, T> {
    return new CreateRequestBuilder<
      SubBillDetailLineSalesOrderBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `SubBillDetailLineSalesOrderBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillDetailLineSalesOrderBiEntities.dataAreaId}.
   * @param billingDetailLineRecId Key property. See {@link SubBillDetailLineSalesOrderBiEntities.billingDetailLineRecId}.
   * @param salesLineRecId Key property. See {@link SubBillDetailLineSalesOrderBiEntities.salesLineRecId}.
   * @returns A request builder for creating requests to retrieve one `SubBillDetailLineSalesOrderBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    billingDetailLineRecId: DeserializedType<T, 'Edm.Int64'>,
    salesLineRecId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<SubBillDetailLineSalesOrderBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      SubBillDetailLineSalesOrderBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      BillingDetailLineRecId: billingDetailLineRecId,
      SalesLineRecId: salesLineRecId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillDetailLineSalesOrderBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillDetailLineSalesOrderBiEntities`.
   */
  update(
    entity: SubBillDetailLineSalesOrderBiEntities<T>
  ): UpdateRequestBuilder<SubBillDetailLineSalesOrderBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      SubBillDetailLineSalesOrderBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillDetailLineSalesOrderBiEntities`.
   * @param dataAreaId Key property. See {@link SubBillDetailLineSalesOrderBiEntities.dataAreaId}.
   * @param billingDetailLineRecId Key property. See {@link SubBillDetailLineSalesOrderBiEntities.billingDetailLineRecId}.
   * @param salesLineRecId Key property. See {@link SubBillDetailLineSalesOrderBiEntities.salesLineRecId}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillDetailLineSalesOrderBiEntities`.
   */
  delete(
    dataAreaId: string,
    billingDetailLineRecId: BigNumber,
    salesLineRecId: BigNumber
  ): DeleteRequestBuilder<SubBillDetailLineSalesOrderBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillDetailLineSalesOrderBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillDetailLineSalesOrderBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillDetailLineSalesOrderBiEntities<T>
  ): DeleteRequestBuilder<SubBillDetailLineSalesOrderBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    billingDetailLineRecId?: BigNumber,
    salesLineRecId?: BigNumber
  ): DeleteRequestBuilder<SubBillDetailLineSalesOrderBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      SubBillDetailLineSalesOrderBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillDetailLineSalesOrderBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BillingDetailLineRecId: billingDetailLineRecId!,
            SalesLineRecId: salesLineRecId!
          }
    );
  }
}
