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
import { MarkupTransTransTaxInformations } from './MarkupTransTransTaxInformations';

/**
 * Request builder class for operations supported on the {@link MarkupTransTransTaxInformations} entity.
 */
export class MarkupTransTransTaxInformationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MarkupTransTransTaxInformations<T>, T> {
  /**
   * Returns a request builder for querying all `MarkupTransTransTaxInformations` entities.
   * @returns A request builder for creating requests to retrieve all `MarkupTransTransTaxInformations` entities.
   */
  getAll(): GetAllRequestBuilder<MarkupTransTransTaxInformations<T>, T> {
    return new GetAllRequestBuilder<MarkupTransTransTaxInformations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MarkupTransTransTaxInformations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MarkupTransTransTaxInformations`.
   */
  create(
    entity: MarkupTransTransTaxInformations<T>
  ): CreateRequestBuilder<MarkupTransTransTaxInformations<T>, T> {
    return new CreateRequestBuilder<MarkupTransTransTaxInformations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MarkupTransTransTaxInformations` entity based on its keys.
   * @param dataAreaId Key property. See {@link MarkupTransTransTaxInformations.dataAreaId}.
   * @param lineNum Key property. See {@link MarkupTransTransTaxInformations.lineNum}.
   * @param transRecId Key property. See {@link MarkupTransTransTaxInformations.transRecId}.
   * @param transTableId Key property. See {@link MarkupTransTransTaxInformations.transTableId}.
   * @returns A request builder for creating requests to retrieve one `MarkupTransTransTaxInformations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>,
    transRecId: DeserializedType<T, 'Edm.Int64'>,
    transTableId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<MarkupTransTransTaxInformations<T>, T> {
    return new GetByKeyRequestBuilder<MarkupTransTransTaxInformations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LineNum: lineNum,
        TransRecId: transRecId,
        TransTableId: transTableId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MarkupTransTransTaxInformations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MarkupTransTransTaxInformations`.
   */
  update(
    entity: MarkupTransTransTaxInformations<T>
  ): UpdateRequestBuilder<MarkupTransTransTaxInformations<T>, T> {
    return new UpdateRequestBuilder<MarkupTransTransTaxInformations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MarkupTransTransTaxInformations`.
   * @param dataAreaId Key property. See {@link MarkupTransTransTaxInformations.dataAreaId}.
   * @param lineNum Key property. See {@link MarkupTransTransTaxInformations.lineNum}.
   * @param transRecId Key property. See {@link MarkupTransTransTaxInformations.transRecId}.
   * @param transTableId Key property. See {@link MarkupTransTransTaxInformations.transTableId}.
   * @returns A request builder for creating requests that delete an entity of type `MarkupTransTransTaxInformations`.
   */
  delete(
    dataAreaId: string,
    lineNum: BigNumber,
    transRecId: BigNumber,
    transTableId: number
  ): DeleteRequestBuilder<MarkupTransTransTaxInformations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MarkupTransTransTaxInformations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MarkupTransTransTaxInformations` by taking the entity as a parameter.
   */
  delete(
    entity: MarkupTransTransTaxInformations<T>
  ): DeleteRequestBuilder<MarkupTransTransTaxInformations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    lineNum?: BigNumber,
    transRecId?: BigNumber,
    transTableId?: number
  ): DeleteRequestBuilder<MarkupTransTransTaxInformations<T>, T> {
    return new DeleteRequestBuilder<MarkupTransTransTaxInformations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof MarkupTransTransTaxInformations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LineNum: lineNum!,
            TransRecId: transRecId!,
            TransTableId: transTableId!
          }
    );
  }
}
