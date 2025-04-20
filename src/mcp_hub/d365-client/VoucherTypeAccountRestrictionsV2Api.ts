/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VoucherTypeAccountRestrictionsV2 } from './VoucherTypeAccountRestrictionsV2';
import { VoucherTypeAccountRestrictionsV2RequestBuilder } from './VoucherTypeAccountRestrictionsV2RequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { LedgerVoucherRestrictionTypeCn } from './LedgerVoucherRestrictionTypeCn';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { TableGroupAll } from './TableGroupAll';
import { NoYes } from './NoYes';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class VoucherTypeAccountRestrictionsV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<VoucherTypeAccountRestrictionsV2<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): VoucherTypeAccountRestrictionsV2Api<DeSerializersT> {
    return new VoucherTypeAccountRestrictionsV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      VoucherTypeAccountRestrictionsV2<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DimensionCombinationsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = VoucherTypeAccountRestrictionsV2;

  requestBuilder(): VoucherTypeAccountRestrictionsV2RequestBuilder<DeSerializersT> {
    return new VoucherTypeAccountRestrictionsV2RequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    VoucherTypeAccountRestrictionsV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      VoucherTypeAccountRestrictionsV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VoucherTypeAccountRestrictionsV2<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof VoucherTypeAccountRestrictionsV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VoucherTypeAccountRestrictionsV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VoucherTypeAccountRestrictionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VOUCHER_TYPE: OrderableEdmTypeField<
      VoucherTypeAccountRestrictionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RESTRICTION_TYPE: EnumField<
      VoucherTypeAccountRestrictionsV2<DeSerializers>,
      DeSerializersT,
      LedgerVoucherRestrictionTypeCn,
      true,
      true
    >;
    NOT_NULLABLE_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      VoucherTypeAccountRestrictionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCOUNT_TYPE: EnumField<
      VoucherTypeAccountRestrictionsV2<DeSerializers>,
      DeSerializersT,
      LedgerJournalAcType,
      true,
      true
    >;
    ACCOUNT_CODE: EnumField<
      VoucherTypeAccountRestrictionsV2<DeSerializers>,
      DeSerializersT,
      TableGroupAll,
      true,
      true
    >;
    ACCOUNT_RELATION: OrderableEdmTypeField<
      VoucherTypeAccountRestrictionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      VoucherTypeAccountRestrictionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_NAME: OrderableEdmTypeField<
      VoucherTypeAccountRestrictionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_APPROVED_BY: OrderableEdmTypeField<
      VoucherTypeAccountRestrictionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VOUCHER_TYPE_NUMBER: OrderableEdmTypeField<
      VoucherTypeAccountRestrictionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEDGER_PRINT_LAYOUT_GROUP: OrderableEdmTypeField<
      VoucherTypeAccountRestrictionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULTED_PREPARED_BY: OrderableEdmTypeField<
      VoucherTypeAccountRestrictionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIORITY: OrderableEdmTypeField<
      VoucherTypeAccountRestrictionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_DEFAULT_TYPE: EnumField<
      VoucherTypeAccountRestrictionsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NUMBER_SEQUENCE_CODE: OrderableEdmTypeField<
      VoucherTypeAccountRestrictionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      VoucherTypeAccountRestrictionsV2<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<VoucherTypeAccountRestrictionsV2<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link voucherType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER_TYPE: fieldBuilder.buildEdmTypeField(
          'VoucherType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link restrictionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESTRICTION_TYPE: fieldBuilder.buildEnumField(
          'RestrictionType',
          LedgerVoucherRestrictionTypeCn,
          true
        ),
        /**
         * Static representation of the {@link notNullableLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOT_NULLABLE_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'NotNullableLedgerDimensionDisplayValue',
            'Edm.String',
            false
          ),
        /**
         * Static representation of the {@link accountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'AccountType',
          LedgerJournalAcType,
          true
        ),
        /**
         * Static representation of the {@link accountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_CODE: fieldBuilder.buildEnumField(
          'AccountCode',
          TableGroupAll,
          true
        ),
        /**
         * Static representation of the {@link accountRelation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_RELATION: fieldBuilder.buildEdmTypeField(
          'AccountRelation',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link journalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'JournalName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultApprovedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_APPROVED_BY: fieldBuilder.buildEdmTypeField(
          'DefaultApprovedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link voucherTypeNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER_TYPE_NUMBER: fieldBuilder.buildEdmTypeField(
          'VoucherTypeNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ledgerPrintLayoutGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_PRINT_LAYOUT_GROUP: fieldBuilder.buildEdmTypeField(
          'LedgerPrintLayoutGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultedPreparedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULTED_PREPARED_BY: fieldBuilder.buildEdmTypeField(
          'DefaultedPreparedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIORITY: fieldBuilder.buildEdmTypeField(
          'Priority',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isDefaultType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEFAULT_TYPE: fieldBuilder.buildEnumField(
          'IsDefaultType',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link numberSequenceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_SEQUENCE_CODE: fieldBuilder.buildEdmTypeField(
          'NumberSequenceCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VoucherTypeAccountRestrictionsV2)
      };
    }

    return this._schema;
  }
}
