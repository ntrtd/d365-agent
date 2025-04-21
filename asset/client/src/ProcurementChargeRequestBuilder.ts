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
import { ProcurementCharge } from './ProcurementCharge';

/**
 * Request builder class for operations supported on the {@link ProcurementCharge} entity.
 */
export class ProcurementChargeRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProcurementCharge<T>, T> {
  /**
   * Returns a request builder for querying all `ProcurementCharge` entities.
   * @returns A request builder for creating requests to retrieve all `ProcurementCharge` entities.
   */
  getAll(): GetAllRequestBuilder<ProcurementCharge<T>, T> {
    return new GetAllRequestBuilder<ProcurementCharge<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProcurementCharge` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProcurementCharge`.
   */
  create(
    entity: ProcurementCharge<T>
  ): CreateRequestBuilder<ProcurementCharge<T>, T> {
    return new CreateRequestBuilder<ProcurementCharge<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProcurementCharge` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProcurementCharge.dataAreaId}.
   * @param chargeCode Key property. See {@link ProcurementCharge.chargeCode}.
   * @returns A request builder for creating requests to retrieve one `ProcurementCharge` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    chargeCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProcurementCharge<T>, T> {
    return new GetByKeyRequestBuilder<ProcurementCharge<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ChargeCode: chargeCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProcurementCharge`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProcurementCharge`.
   */
  update(
    entity: ProcurementCharge<T>
  ): UpdateRequestBuilder<ProcurementCharge<T>, T> {
    return new UpdateRequestBuilder<ProcurementCharge<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProcurementCharge`.
   * @param dataAreaId Key property. See {@link ProcurementCharge.dataAreaId}.
   * @param chargeCode Key property. See {@link ProcurementCharge.chargeCode}.
   * @returns A request builder for creating requests that delete an entity of type `ProcurementCharge`.
   */
  delete(
    dataAreaId: string,
    chargeCode: string
  ): DeleteRequestBuilder<ProcurementCharge<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProcurementCharge`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProcurementCharge` by taking the entity as a parameter.
   */
  delete(
    entity: ProcurementCharge<T>
  ): DeleteRequestBuilder<ProcurementCharge<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    chargeCode?: string
  ): DeleteRequestBuilder<ProcurementCharge<T>, T> {
    return new DeleteRequestBuilder<ProcurementCharge<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProcurementCharge
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ChargeCode: chargeCode!
          }
    );
  }
}
