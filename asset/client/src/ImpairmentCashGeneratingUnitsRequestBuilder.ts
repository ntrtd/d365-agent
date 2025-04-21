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
import { ImpairmentCashGeneratingUnits } from './ImpairmentCashGeneratingUnits';

/**
 * Request builder class for operations supported on the {@link ImpairmentCashGeneratingUnits} entity.
 */
export class ImpairmentCashGeneratingUnitsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ImpairmentCashGeneratingUnits<T>, T> {
  /**
   * Returns a request builder for querying all `ImpairmentCashGeneratingUnits` entities.
   * @returns A request builder for creating requests to retrieve all `ImpairmentCashGeneratingUnits` entities.
   */
  getAll(): GetAllRequestBuilder<ImpairmentCashGeneratingUnits<T>, T> {
    return new GetAllRequestBuilder<ImpairmentCashGeneratingUnits<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ImpairmentCashGeneratingUnits` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ImpairmentCashGeneratingUnits`.
   */
  create(
    entity: ImpairmentCashGeneratingUnits<T>
  ): CreateRequestBuilder<ImpairmentCashGeneratingUnits<T>, T> {
    return new CreateRequestBuilder<ImpairmentCashGeneratingUnits<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ImpairmentCashGeneratingUnits` entity based on its keys.
   * @param dataAreaId Key property. See {@link ImpairmentCashGeneratingUnits.dataAreaId}.
   * @param cashGeneratingUnitNumber Key property. See {@link ImpairmentCashGeneratingUnits.cashGeneratingUnitNumber}.
   * @returns A request builder for creating requests to retrieve one `ImpairmentCashGeneratingUnits` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    cashGeneratingUnitNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ImpairmentCashGeneratingUnits<T>, T> {
    return new GetByKeyRequestBuilder<ImpairmentCashGeneratingUnits<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CashGeneratingUnitNumber: cashGeneratingUnitNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ImpairmentCashGeneratingUnits`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ImpairmentCashGeneratingUnits`.
   */
  update(
    entity: ImpairmentCashGeneratingUnits<T>
  ): UpdateRequestBuilder<ImpairmentCashGeneratingUnits<T>, T> {
    return new UpdateRequestBuilder<ImpairmentCashGeneratingUnits<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ImpairmentCashGeneratingUnits`.
   * @param dataAreaId Key property. See {@link ImpairmentCashGeneratingUnits.dataAreaId}.
   * @param cashGeneratingUnitNumber Key property. See {@link ImpairmentCashGeneratingUnits.cashGeneratingUnitNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ImpairmentCashGeneratingUnits`.
   */
  delete(
    dataAreaId: string,
    cashGeneratingUnitNumber: string
  ): DeleteRequestBuilder<ImpairmentCashGeneratingUnits<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ImpairmentCashGeneratingUnits`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ImpairmentCashGeneratingUnits` by taking the entity as a parameter.
   */
  delete(
    entity: ImpairmentCashGeneratingUnits<T>
  ): DeleteRequestBuilder<ImpairmentCashGeneratingUnits<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    cashGeneratingUnitNumber?: string
  ): DeleteRequestBuilder<ImpairmentCashGeneratingUnits<T>, T> {
    return new DeleteRequestBuilder<ImpairmentCashGeneratingUnits<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ImpairmentCashGeneratingUnits
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CashGeneratingUnitNumber: cashGeneratingUnitNumber!
          }
    );
  }
}
