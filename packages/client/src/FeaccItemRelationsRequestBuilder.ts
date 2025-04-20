/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { FeaccItemRelations } from './FeaccItemRelations';

/**
 * Request builder class for operations supported on the {@link FeaccItemRelations} entity.
 */
export class FeaccItemRelationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FeaccItemRelations<T>, T> {
  /**
   * Returns a request builder for querying all `FeaccItemRelations` entities.
   * @returns A request builder for creating requests to retrieve all `FeaccItemRelations` entities.
   */
  getAll(): GetAllRequestBuilder<FeaccItemRelations<T>, T> {
    return new GetAllRequestBuilder<FeaccItemRelations<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FeaccItemRelations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FeaccItemRelations`.
   */
  create(
    entity: FeaccItemRelations<T>
  ): CreateRequestBuilder<FeaccItemRelations<T>, T> {
    return new CreateRequestBuilder<FeaccItemRelations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FeaccItemRelations` entity based on its keys.
   * @param dataAreaId Key property. See {@link FeaccItemRelations.dataAreaId}.
   * @param customsCode Key property. See {@link FeaccItemRelations.customsCode}.
   * @param actionDate Key property. See {@link FeaccItemRelations.actionDate}.
   * @param itemNumber Key property. See {@link FeaccItemRelations.itemNumber}.
   * @returns A request builder for creating requests to retrieve one `FeaccItemRelations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    customsCode: DeserializedType<T, 'Edm.String'>,
    actionDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    itemNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FeaccItemRelations<T>, T> {
    return new GetByKeyRequestBuilder<FeaccItemRelations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CustomsCode: customsCode,
        ActionDate: actionDate,
        ItemNumber: itemNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FeaccItemRelations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FeaccItemRelations`.
   */
  update(
    entity: FeaccItemRelations<T>
  ): UpdateRequestBuilder<FeaccItemRelations<T>, T> {
    return new UpdateRequestBuilder<FeaccItemRelations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FeaccItemRelations`.
   * @param dataAreaId Key property. See {@link FeaccItemRelations.dataAreaId}.
   * @param customsCode Key property. See {@link FeaccItemRelations.customsCode}.
   * @param actionDate Key property. See {@link FeaccItemRelations.actionDate}.
   * @param itemNumber Key property. See {@link FeaccItemRelations.itemNumber}.
   * @returns A request builder for creating requests that delete an entity of type `FeaccItemRelations`.
   */
  delete(
    dataAreaId: string,
    customsCode: string,
    actionDate: Moment,
    itemNumber: string
  ): DeleteRequestBuilder<FeaccItemRelations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FeaccItemRelations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FeaccItemRelations` by taking the entity as a parameter.
   */
  delete(
    entity: FeaccItemRelations<T>
  ): DeleteRequestBuilder<FeaccItemRelations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    customsCode?: string,
    actionDate?: Moment,
    itemNumber?: string
  ): DeleteRequestBuilder<FeaccItemRelations<T>, T> {
    return new DeleteRequestBuilder<FeaccItemRelations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof FeaccItemRelations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CustomsCode: customsCode!,
            ActionDate: actionDate!,
            ItemNumber: itemNumber!
          }
    );
  }
}
