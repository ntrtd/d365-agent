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
import { SubBillDetailLineBiEntities } from './SubBillDetailLineBiEntities';

/**
 * Request builder class for operations supported on the {@link SubBillDetailLineBiEntities} entity.
 */
export class SubBillDetailLineBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillDetailLineBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillDetailLineBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillDetailLineBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillDetailLineBiEntities<T>, T> {
    return new GetAllRequestBuilder<SubBillDetailLineBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SubBillDetailLineBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillDetailLineBiEntities`.
   */
  create(
    entity: SubBillDetailLineBiEntities<T>
  ): CreateRequestBuilder<SubBillDetailLineBiEntities<T>, T> {
    return new CreateRequestBuilder<SubBillDetailLineBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubBillDetailLineBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillDetailLineBiEntities.dataAreaId}.
   * @param lineNum Key property. See {@link SubBillDetailLineBiEntities.lineNum}.
   * @param subBillSchedLineRecId Key property. See {@link SubBillDetailLineBiEntities.subBillSchedLineRecId}.
   * @returns A request builder for creating requests to retrieve one `SubBillDetailLineBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>,
    subBillSchedLineRecId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<SubBillDetailLineBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<SubBillDetailLineBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LineNum: lineNum,
        SubBillSchedLineRecId: subBillSchedLineRecId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillDetailLineBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillDetailLineBiEntities`.
   */
  update(
    entity: SubBillDetailLineBiEntities<T>
  ): UpdateRequestBuilder<SubBillDetailLineBiEntities<T>, T> {
    return new UpdateRequestBuilder<SubBillDetailLineBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillDetailLineBiEntities`.
   * @param dataAreaId Key property. See {@link SubBillDetailLineBiEntities.dataAreaId}.
   * @param lineNum Key property. See {@link SubBillDetailLineBiEntities.lineNum}.
   * @param subBillSchedLineRecId Key property. See {@link SubBillDetailLineBiEntities.subBillSchedLineRecId}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillDetailLineBiEntities`.
   */
  delete(
    dataAreaId: string,
    lineNum: BigNumber,
    subBillSchedLineRecId: BigNumber
  ): DeleteRequestBuilder<SubBillDetailLineBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillDetailLineBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillDetailLineBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillDetailLineBiEntities<T>
  ): DeleteRequestBuilder<SubBillDetailLineBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    lineNum?: BigNumber,
    subBillSchedLineRecId?: BigNumber
  ): DeleteRequestBuilder<SubBillDetailLineBiEntities<T>, T> {
    return new DeleteRequestBuilder<SubBillDetailLineBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillDetailLineBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LineNum: lineNum!,
            SubBillSchedLineRecId: subBillSchedLineRecId!
          }
    );
  }
}
