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
import { CfopMatrixEntities } from './CfopMatrixEntities';
import { SalesPurchTrntypeBr } from './SalesPurchTrntypeBr';

/**
 * Request builder class for operations supported on the {@link CfopMatrixEntities} entity.
 */
export class CfopMatrixEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CfopMatrixEntities<T>, T> {
  /**
   * Returns a request builder for querying all `CfopMatrixEntities` entities.
   * @returns A request builder for creating requests to retrieve all `CfopMatrixEntities` entities.
   */
  getAll(): GetAllRequestBuilder<CfopMatrixEntities<T>, T> {
    return new GetAllRequestBuilder<CfopMatrixEntities<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CfopMatrixEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CfopMatrixEntities`.
   */
  create(
    entity: CfopMatrixEntities<T>
  ): CreateRequestBuilder<CfopMatrixEntities<T>, T> {
    return new CreateRequestBuilder<CfopMatrixEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CfopMatrixEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link CfopMatrixEntities.dataAreaId}.
   * @param cfopCode Key property. See {@link CfopMatrixEntities.cfopCode}.
   * @param transactionType Key property. See {@link CfopMatrixEntities.transactionType}.
   * @returns A request builder for creating requests to retrieve one `CfopMatrixEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    cfopCode: DeserializedType<T, 'Edm.String'>,
    transactionType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.SalesPurchTrntype_BR'
    >
  ): GetByKeyRequestBuilder<CfopMatrixEntities<T>, T> {
    return new GetByKeyRequestBuilder<CfopMatrixEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CFOPCode: cfopCode,
        TransactionType: transactionType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CfopMatrixEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CfopMatrixEntities`.
   */
  update(
    entity: CfopMatrixEntities<T>
  ): UpdateRequestBuilder<CfopMatrixEntities<T>, T> {
    return new UpdateRequestBuilder<CfopMatrixEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CfopMatrixEntities`.
   * @param dataAreaId Key property. See {@link CfopMatrixEntities.dataAreaId}.
   * @param cfopCode Key property. See {@link CfopMatrixEntities.cfopCode}.
   * @param transactionType Key property. See {@link CfopMatrixEntities.transactionType}.
   * @returns A request builder for creating requests that delete an entity of type `CfopMatrixEntities`.
   */
  delete(
    dataAreaId: string,
    cfopCode: string,
    transactionType: SalesPurchTrntypeBr
  ): DeleteRequestBuilder<CfopMatrixEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CfopMatrixEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CfopMatrixEntities` by taking the entity as a parameter.
   */
  delete(
    entity: CfopMatrixEntities<T>
  ): DeleteRequestBuilder<CfopMatrixEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    cfopCode?: string,
    transactionType?: SalesPurchTrntypeBr
  ): DeleteRequestBuilder<CfopMatrixEntities<T>, T> {
    return new DeleteRequestBuilder<CfopMatrixEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CfopMatrixEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CFOPCode: cfopCode!,
            TransactionType: transactionType!
          }
    );
  }
}
