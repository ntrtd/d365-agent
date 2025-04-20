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
import { PriceComponentCodePostings } from './PriceComponentCodePostings';
import { TableGroupAll } from './TableGroupAll';

/**
 * Request builder class for operations supported on the {@link PriceComponentCodePostings} entity.
 */
export class PriceComponentCodePostingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PriceComponentCodePostings<T>, T> {
  /**
   * Returns a request builder for querying all `PriceComponentCodePostings` entities.
   * @returns A request builder for creating requests to retrieve all `PriceComponentCodePostings` entities.
   */
  getAll(): GetAllRequestBuilder<PriceComponentCodePostings<T>, T> {
    return new GetAllRequestBuilder<PriceComponentCodePostings<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PriceComponentCodePostings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PriceComponentCodePostings`.
   */
  create(
    entity: PriceComponentCodePostings<T>
  ): CreateRequestBuilder<PriceComponentCodePostings<T>, T> {
    return new CreateRequestBuilder<PriceComponentCodePostings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PriceComponentCodePostings` entity based on its keys.
   * @param dataAreaId Key property. See {@link PriceComponentCodePostings.dataAreaId}.
   * @param gupPriceComponentCodePostingProfileName Key property. See {@link PriceComponentCodePostings.gupPriceComponentCodePostingProfileName}.
   * @param itemCode Key property. See {@link PriceComponentCodePostings.itemCode}.
   * @param itemRelation Key property. See {@link PriceComponentCodePostings.itemRelation}.
   * @param accountCode Key property. See {@link PriceComponentCodePostings.accountCode}.
   * @param accountRelation Key property. See {@link PriceComponentCodePostings.accountRelation}.
   * @returns A request builder for creating requests to retrieve one `PriceComponentCodePostings` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    gupPriceComponentCodePostingProfileName: DeserializedType<T, 'Edm.String'>,
    itemCode: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TableGroupAll'
    >,
    itemRelation: DeserializedType<T, 'Edm.String'>,
    accountCode: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TableGroupAll'
    >,
    accountRelation: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PriceComponentCodePostings<T>, T> {
    return new GetByKeyRequestBuilder<PriceComponentCodePostings<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GUPPriceComponentCodePostingProfile_Name:
          gupPriceComponentCodePostingProfileName,
        ItemCode: itemCode,
        ItemRelation: itemRelation,
        AccountCode: accountCode,
        AccountRelation: accountRelation
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PriceComponentCodePostings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PriceComponentCodePostings`.
   */
  update(
    entity: PriceComponentCodePostings<T>
  ): UpdateRequestBuilder<PriceComponentCodePostings<T>, T> {
    return new UpdateRequestBuilder<PriceComponentCodePostings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PriceComponentCodePostings`.
   * @param dataAreaId Key property. See {@link PriceComponentCodePostings.dataAreaId}.
   * @param gupPriceComponentCodePostingProfileName Key property. See {@link PriceComponentCodePostings.gupPriceComponentCodePostingProfileName}.
   * @param itemCode Key property. See {@link PriceComponentCodePostings.itemCode}.
   * @param itemRelation Key property. See {@link PriceComponentCodePostings.itemRelation}.
   * @param accountCode Key property. See {@link PriceComponentCodePostings.accountCode}.
   * @param accountRelation Key property. See {@link PriceComponentCodePostings.accountRelation}.
   * @returns A request builder for creating requests that delete an entity of type `PriceComponentCodePostings`.
   */
  delete(
    dataAreaId: string,
    gupPriceComponentCodePostingProfileName: string,
    itemCode: TableGroupAll,
    itemRelation: string,
    accountCode: TableGroupAll,
    accountRelation: string
  ): DeleteRequestBuilder<PriceComponentCodePostings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PriceComponentCodePostings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PriceComponentCodePostings` by taking the entity as a parameter.
   */
  delete(
    entity: PriceComponentCodePostings<T>
  ): DeleteRequestBuilder<PriceComponentCodePostings<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    gupPriceComponentCodePostingProfileName?: string,
    itemCode?: TableGroupAll,
    itemRelation?: string,
    accountCode?: TableGroupAll,
    accountRelation?: string
  ): DeleteRequestBuilder<PriceComponentCodePostings<T>, T> {
    return new DeleteRequestBuilder<PriceComponentCodePostings<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PriceComponentCodePostings
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GUPPriceComponentCodePostingProfile_Name:
              gupPriceComponentCodePostingProfileName!,
            ItemCode: itemCode!,
            ItemRelation: itemRelation!,
            AccountCode: accountCode!,
            AccountRelation: accountRelation!
          }
    );
  }
}
