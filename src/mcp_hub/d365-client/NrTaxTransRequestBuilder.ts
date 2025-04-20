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
import { NrTaxTrans } from './NrTaxTrans';

/**
 * Request builder class for operations supported on the {@link NrTaxTrans} entity.
 */
export class NrTaxTransRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<NrTaxTrans<T>, T> {
  /**
   * Returns a request builder for querying all `NrTaxTrans` entities.
   * @returns A request builder for creating requests to retrieve all `NrTaxTrans` entities.
   */
  getAll(): GetAllRequestBuilder<NrTaxTrans<T>, T> {
    return new GetAllRequestBuilder<NrTaxTrans<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `NrTaxTrans` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `NrTaxTrans`.
   */
  create(entity: NrTaxTrans<T>): CreateRequestBuilder<NrTaxTrans<T>, T> {
    return new CreateRequestBuilder<NrTaxTrans<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `NrTaxTrans` entity based on its keys.
   * @param dataAreaId Key property. See {@link NrTaxTrans.dataAreaId}.
   * @param lineId Key property. See {@link NrTaxTrans.lineId}.
   * @returns A request builder for creating requests to retrieve one `NrTaxTrans` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lineId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<NrTaxTrans<T>, T> {
    return new GetByKeyRequestBuilder<NrTaxTrans<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      LineId: lineId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `NrTaxTrans`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `NrTaxTrans`.
   */
  update(entity: NrTaxTrans<T>): UpdateRequestBuilder<NrTaxTrans<T>, T> {
    return new UpdateRequestBuilder<NrTaxTrans<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `NrTaxTrans`.
   * @param dataAreaId Key property. See {@link NrTaxTrans.dataAreaId}.
   * @param lineId Key property. See {@link NrTaxTrans.lineId}.
   * @returns A request builder for creating requests that delete an entity of type `NrTaxTrans`.
   */
  delete(
    dataAreaId: string,
    lineId: string
  ): DeleteRequestBuilder<NrTaxTrans<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `NrTaxTrans`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `NrTaxTrans` by taking the entity as a parameter.
   */
  delete(entity: NrTaxTrans<T>): DeleteRequestBuilder<NrTaxTrans<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    lineId?: string
  ): DeleteRequestBuilder<NrTaxTrans<T>, T> {
    return new DeleteRequestBuilder<NrTaxTrans<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof NrTaxTrans
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LineId: lineId!
          }
    );
  }
}
