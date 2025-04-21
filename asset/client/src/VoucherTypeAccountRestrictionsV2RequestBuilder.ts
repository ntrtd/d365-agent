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
import { VoucherTypeAccountRestrictionsV2 } from './VoucherTypeAccountRestrictionsV2';
import { LedgerVoucherRestrictionTypeCn } from './LedgerVoucherRestrictionTypeCn';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { TableGroupAll } from './TableGroupAll';

/**
 * Request builder class for operations supported on the {@link VoucherTypeAccountRestrictionsV2} entity.
 */
export class VoucherTypeAccountRestrictionsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VoucherTypeAccountRestrictionsV2<T>, T> {
  /**
   * Returns a request builder for querying all `VoucherTypeAccountRestrictionsV2` entities.
   * @returns A request builder for creating requests to retrieve all `VoucherTypeAccountRestrictionsV2` entities.
   */
  getAll(): GetAllRequestBuilder<VoucherTypeAccountRestrictionsV2<T>, T> {
    return new GetAllRequestBuilder<VoucherTypeAccountRestrictionsV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VoucherTypeAccountRestrictionsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VoucherTypeAccountRestrictionsV2`.
   */
  create(
    entity: VoucherTypeAccountRestrictionsV2<T>
  ): CreateRequestBuilder<VoucherTypeAccountRestrictionsV2<T>, T> {
    return new CreateRequestBuilder<VoucherTypeAccountRestrictionsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VoucherTypeAccountRestrictionsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link VoucherTypeAccountRestrictionsV2.dataAreaId}.
   * @param voucherType Key property. See {@link VoucherTypeAccountRestrictionsV2.voucherType}.
   * @param restrictionType Key property. See {@link VoucherTypeAccountRestrictionsV2.restrictionType}.
   * @param notNullableLedgerDimensionDisplayValue Key property. See {@link VoucherTypeAccountRestrictionsV2.notNullableLedgerDimensionDisplayValue}.
   * @param accountType Key property. See {@link VoucherTypeAccountRestrictionsV2.accountType}.
   * @param accountCode Key property. See {@link VoucherTypeAccountRestrictionsV2.accountCode}.
   * @param accountRelation Key property. See {@link VoucherTypeAccountRestrictionsV2.accountRelation}.
   * @returns A request builder for creating requests to retrieve one `VoucherTypeAccountRestrictionsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    voucherType: DeserializedType<T, 'Edm.String'>,
    restrictionType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.LedgerVoucherRestrictionType_CN'
    >,
    notNullableLedgerDimensionDisplayValue: DeserializedType<T, 'Edm.String'>,
    accountType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.LedgerJournalACType'
    >,
    accountCode: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TableGroupAll'
    >,
    accountRelation: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VoucherTypeAccountRestrictionsV2<T>, T> {
    return new GetByKeyRequestBuilder<VoucherTypeAccountRestrictionsV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        VoucherType: voucherType,
        RestrictionType: restrictionType,
        NotNullableLedgerDimensionDisplayValue:
          notNullableLedgerDimensionDisplayValue,
        AccountType: accountType,
        AccountCode: accountCode,
        AccountRelation: accountRelation
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VoucherTypeAccountRestrictionsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VoucherTypeAccountRestrictionsV2`.
   */
  update(
    entity: VoucherTypeAccountRestrictionsV2<T>
  ): UpdateRequestBuilder<VoucherTypeAccountRestrictionsV2<T>, T> {
    return new UpdateRequestBuilder<VoucherTypeAccountRestrictionsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VoucherTypeAccountRestrictionsV2`.
   * @param dataAreaId Key property. See {@link VoucherTypeAccountRestrictionsV2.dataAreaId}.
   * @param voucherType Key property. See {@link VoucherTypeAccountRestrictionsV2.voucherType}.
   * @param restrictionType Key property. See {@link VoucherTypeAccountRestrictionsV2.restrictionType}.
   * @param notNullableLedgerDimensionDisplayValue Key property. See {@link VoucherTypeAccountRestrictionsV2.notNullableLedgerDimensionDisplayValue}.
   * @param accountType Key property. See {@link VoucherTypeAccountRestrictionsV2.accountType}.
   * @param accountCode Key property. See {@link VoucherTypeAccountRestrictionsV2.accountCode}.
   * @param accountRelation Key property. See {@link VoucherTypeAccountRestrictionsV2.accountRelation}.
   * @returns A request builder for creating requests that delete an entity of type `VoucherTypeAccountRestrictionsV2`.
   */
  delete(
    dataAreaId: string,
    voucherType: string,
    restrictionType: LedgerVoucherRestrictionTypeCn,
    notNullableLedgerDimensionDisplayValue: string,
    accountType: LedgerJournalAcType,
    accountCode: TableGroupAll,
    accountRelation: string
  ): DeleteRequestBuilder<VoucherTypeAccountRestrictionsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VoucherTypeAccountRestrictionsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VoucherTypeAccountRestrictionsV2` by taking the entity as a parameter.
   */
  delete(
    entity: VoucherTypeAccountRestrictionsV2<T>
  ): DeleteRequestBuilder<VoucherTypeAccountRestrictionsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    voucherType?: string,
    restrictionType?: LedgerVoucherRestrictionTypeCn,
    notNullableLedgerDimensionDisplayValue?: string,
    accountType?: LedgerJournalAcType,
    accountCode?: TableGroupAll,
    accountRelation?: string
  ): DeleteRequestBuilder<VoucherTypeAccountRestrictionsV2<T>, T> {
    return new DeleteRequestBuilder<VoucherTypeAccountRestrictionsV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VoucherTypeAccountRestrictionsV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            VoucherType: voucherType!,
            RestrictionType: restrictionType!,
            NotNullableLedgerDimensionDisplayValue:
              notNullableLedgerDimensionDisplayValue!,
            AccountType: accountType!,
            AccountCode: accountCode!,
            AccountRelation: accountRelation!
          }
    );
  }
}
