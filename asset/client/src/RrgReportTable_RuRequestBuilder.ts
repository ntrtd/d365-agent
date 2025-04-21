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
import { RrgReportTable_Ru } from './RrgReportTable_Ru';

/**
 * Request builder class for operations supported on the {@link RrgReportTable_Ru} entity.
 */
export class RrgReportTable_RuRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RrgReportTable_Ru<T>, T> {
  /**
   * Returns a request builder for querying all `RrgReportTable_Ru` entities.
   * @returns A request builder for creating requests to retrieve all `RrgReportTable_Ru` entities.
   */
  getAll(): GetAllRequestBuilder<RrgReportTable_Ru<T>, T> {
    return new GetAllRequestBuilder<RrgReportTable_Ru<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RrgReportTable_Ru` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RrgReportTable_Ru`.
   */
  create(
    entity: RrgReportTable_Ru<T>
  ): CreateRequestBuilder<RrgReportTable_Ru<T>, T> {
    return new CreateRequestBuilder<RrgReportTable_Ru<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RrgReportTable_Ru` entity based on its keys.
   * @param dataAreaId Key property. See {@link RrgReportTable_Ru.dataAreaId}.
   * @param repCode Key property. See {@link RrgReportTable_Ru.repCode}.
   * @returns A request builder for creating requests to retrieve one `RrgReportTable_Ru` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    repCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RrgReportTable_Ru<T>, T> {
    return new GetByKeyRequestBuilder<RrgReportTable_Ru<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      RepCode: repCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RrgReportTable_Ru`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RrgReportTable_Ru`.
   */
  update(
    entity: RrgReportTable_Ru<T>
  ): UpdateRequestBuilder<RrgReportTable_Ru<T>, T> {
    return new UpdateRequestBuilder<RrgReportTable_Ru<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RrgReportTable_Ru`.
   * @param dataAreaId Key property. See {@link RrgReportTable_Ru.dataAreaId}.
   * @param repCode Key property. See {@link RrgReportTable_Ru.repCode}.
   * @returns A request builder for creating requests that delete an entity of type `RrgReportTable_Ru`.
   */
  delete(
    dataAreaId: string,
    repCode: string
  ): DeleteRequestBuilder<RrgReportTable_Ru<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RrgReportTable_Ru`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RrgReportTable_Ru` by taking the entity as a parameter.
   */
  delete(
    entity: RrgReportTable_Ru<T>
  ): DeleteRequestBuilder<RrgReportTable_Ru<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    repCode?: string
  ): DeleteRequestBuilder<RrgReportTable_Ru<T>, T> {
    return new DeleteRequestBuilder<RrgReportTable_Ru<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RrgReportTable_Ru
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RepCode: repCode!
          }
    );
  }
}
