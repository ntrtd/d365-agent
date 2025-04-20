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
import { CfpsTable } from './CfpsTable';
import { SalesPurchBothBr } from './SalesPurchBothBr';

/**
 * Request builder class for operations supported on the {@link CfpsTable} entity.
 */
export class CfpsTableRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CfpsTable<T>, T> {
  /**
   * Returns a request builder for querying all `CfpsTable` entities.
   * @returns A request builder for creating requests to retrieve all `CfpsTable` entities.
   */
  getAll(): GetAllRequestBuilder<CfpsTable<T>, T> {
    return new GetAllRequestBuilder<CfpsTable<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CfpsTable` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CfpsTable`.
   */
  create(entity: CfpsTable<T>): CreateRequestBuilder<CfpsTable<T>, T> {
    return new CreateRequestBuilder<CfpsTable<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CfpsTable` entity based on its keys.
   * @param dataAreaId Key property. See {@link CfpsTable.dataAreaId}.
   * @param transactionType Key property. See {@link CfpsTable.transactionType}.
   * @param cfpsCode Key property. See {@link CfpsTable.cfpsCode}.
   * @returns A request builder for creating requests to retrieve one `CfpsTable` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    transactionType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.SalesPurchBoth_BR'
    >,
    cfpsCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CfpsTable<T>, T> {
    return new GetByKeyRequestBuilder<CfpsTable<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      TransactionType: transactionType,
      CFPSCode: cfpsCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CfpsTable`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CfpsTable`.
   */
  update(entity: CfpsTable<T>): UpdateRequestBuilder<CfpsTable<T>, T> {
    return new UpdateRequestBuilder<CfpsTable<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CfpsTable`.
   * @param dataAreaId Key property. See {@link CfpsTable.dataAreaId}.
   * @param transactionType Key property. See {@link CfpsTable.transactionType}.
   * @param cfpsCode Key property. See {@link CfpsTable.cfpsCode}.
   * @returns A request builder for creating requests that delete an entity of type `CfpsTable`.
   */
  delete(
    dataAreaId: string,
    transactionType: SalesPurchBothBr,
    cfpsCode: string
  ): DeleteRequestBuilder<CfpsTable<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CfpsTable`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CfpsTable` by taking the entity as a parameter.
   */
  delete(entity: CfpsTable<T>): DeleteRequestBuilder<CfpsTable<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    transactionType?: SalesPurchBothBr,
    cfpsCode?: string
  ): DeleteRequestBuilder<CfpsTable<T>, T> {
    return new DeleteRequestBuilder<CfpsTable<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CfpsTable
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TransactionType: transactionType!,
            CFPSCode: cfpsCode!
          }
    );
  }
}
